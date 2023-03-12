const form = document.querySelector(".sign-up__input");
const formInputs = document.querySelectorAll(".input-form");
const inputEmail = document.querySelector(".input-form.input-email");

function validateEmail(email) {
	const re =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	formInputs.forEach((formInput) => {
		if (formInput.value === "") {
			formInput.classList.add("error");
			formInput.placeholder = "Please fill the data";
		} else {
			formInput.classList.remove("error");
		}
	});

	if (!validateEmail(inputEmail.value)) {
		inputEmail.classList.add("error");
	} else {
		inputEmail.classList.remove("error");
		inputEmail.classList.add("success");
	}
});
