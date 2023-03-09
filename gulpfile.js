const { src, dest, series, watch } = require("gulp");
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");
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
		.pipe(dest("dist"));
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

exports.build = series(clear, css, html);
exports.serve = series(clear, css, html, serve);
exports.clear = clear;
