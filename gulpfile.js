const { src, dest, series, watch } = require("gulp");
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");

const sync = require("browser-sync").create();

function html() {
	return src("src/**html")
		.pipe(
			include({
				prefix: "@@",
			})
		)
		.pipe(
			htmlmin({
				collapseWhitespace: true,
			})
		)
		.pipe(dest("dist"));
}

function css() {
	return src("src/css/**css")
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 2 versions"],
			})
		)
		.pipe(csso())
		.pipe(concat("index.css"))
		.pipe(dest("dist"));
}

function fonts() {
	return src("src/assets/fonts/**ttf").pipe(dest("dist/fonts"));
}

function img() {
	return src("src/assets/img/**svg").pipe(dest("dist/img"));
}

function clear() {
	return del("dist");
}

function serve() {
	sync.init({
		server: "./dist",
	});

	watch("src/parts/**.html", series(html)).on("change", sync.reload);
	watch("src/**.html", series(html)).on("change", sync.reload);
	watch("src/css/**.css", series(css)).on("change", sync.reload);
}

exports.build = series(clear, css, html, fonts, img);
exports.serve = series(clear, css, html, fonts, img, serve);
exports.clear = clear;
