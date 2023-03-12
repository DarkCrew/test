const form = document.querySelector(".sign-up__input");
const formInputs = document.querySelectorAll(".input-form");
const inputEmail = document.querySelector(".input-form.input-email");
const inputPassword = document.querySelector(".input-form.input-password");
const inputConfirmPassword = document.querySelector(
	".input-form.input-confirm-password"
);

function validateEmail(email) {
	const re =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
	const re = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;
	return re.test(String(password));
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Checking for empty inputs
	formInputs.forEach((formInput) => {
		if (formInput.value === "") {
			formInput.classList.add("error");
			formInput.placeholder = "Please fill the data";
		} else {
			formInput.classList.remove("error");
		}
	});

	// Checking for invalid email
	if (!validateEmail(inputEmail.value)) {
		inputEmail.classList.add("error");
		inputEmail.classList.remove("success");
	} else {
		inputEmail.classList.remove("error");
		inputEmail.classList.add("success");
	}

	// Checking for invalid password
	if (!validatePassword(inputPassword.value)) {
		inputPassword.classList.add("error");
		inputPassword.classList.remove("success");
	} else {
		inputPassword.classList.remove("error");
		inputPassword.classList.add("success");
	}

	// Checking for invalid confirm password
	if (!validatePassword(inputConfirmPassword.value)) {
		inputConfirmPassword.classList.add("error");
		inputConfirmPassword.classList.remove("success");
	} else {
		inputConfirmPassword.classList.remove("error");
		inputConfirmPassword.classList.add("success");
	}

	// Checking if passwords are equal
	if (inputConfirmPassword.value !== inputPassword.value) {
		inputConfirmPassword.classList.add("error");
		inputConfirmPassword.classList.remove("success");
	} else {
		inputConfirmPassword.classList.remove("error");
		inputConfirmPassword.classList.add("success");
	}
});
