/*-----Форма обратной связи-----*/

var link = document.querySelector(".lost-btn");

var popupForm = document.querySelector(".write-us");
var overlay = document.querySelector(".overlay");
var close = popupForm.querySelector(".modal-close");

var contactForm = popupForm.querySelector(".contact-form");
var name = popupForm.querySelector("[name=fullname]");
var mail = popupForm.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

	try {
		storage = localStorage.getItem("fullname");
	} catch (err) {
		isStorageSupport = false;
	}

	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popupForm.classList.add("modal-show");
		overlay.classList.add("modal-show-overlay");
		fullname.focus();
	});

		if (storage) {
			name.value = storage;
			email.focus();
		} else {
			fullname.focus();
		}

	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popupForm.classList.remove("modal-show");
		popupForm.classList.remove("modal-error");
		overlay.classList.remove("modal-show-overlay");
	});

	contactForm.addEventListener("submit", function (evt) {
		if (!name.value || !email.value) {
		evt.preventDefault();
		popupForm.classList.add("modal-error");
		popupForm.offsetWidth = popupForm.offsetWidth;
		console.log("Введите контактные данные");
		} else {
			if (isStorageSupport) {
				localStorage.setItem("fullname", name.value);
			}
		}
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popupForm.classList.contains("modal-show")) {
				popupForm.classList.remove("modal-show");
				popupForm.classList.remove("modal-error");
				overlay.classList.remove("modal-show-overlay");
			}
		}
	});

/*-----Карта-----*/

	var mapLink = document.querySelector(".contacts-button-map");

	var mapPopup = document.querySelector(".modal-map");
	var mapClose = mapPopup.querySelector(".modal-close");

	mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
		overlay.classList.add("modal-show-overlay");
	});

	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
		overlay.classList.remove("modal-show-overlay");
	});

	window.addEventListener("keydown", function (evt) {
		evt.preventDefault();
			if (evt.keyCode === 27) {
				if (mapPopup.classList.contains("modal-show")) {
					mapPopup.classList.remove("modal-show");
					overlay.classList.remove("modal-show-overlay");
				}
			}
		});