/*-----Товар в корзине-----*/
	var cartLink = document.querySelectorAll(".buy-btn");
	var cartPopup = document.querySelector(".add-product");
	var cartClose = cartPopup.querySelector(".modal-close");
	var cartContinue = cartPopup.querySelector(".btn-continue");
	var overlay = document.querySelector(".overlay");

	if (cartLink) {
		for (var i = 0; i < cartLink.length; i++) {
			cartLink[i].addEventListener("click", function (evt) {
				evt.preventDefault();
				cartPopup.classList.add("modal-show");
				overlay.classList.add("modal-show-overlay");
				})
			};
		}

	if (overlay) {
		overlay.addEventListener("click", function (evt) {
			evt.preventDefault();
			overlay.classList.remove("modal-show-overlay");
			cartPopup.classList.remove("modal-show");
		});
	}

	cartClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		cartPopup.classList.remove("modal-show");
		overlay.classList.remove("modal-show-overlay");
	});

	cartContinue.addEventListener("click", function (evt) {
		evt.preventDefault();
		cartPopup.classList.remove("modal-show");
		overlay.classList.remove("modal-show-overlay");
	});

	window.addEventListener("keydown", function (evt) {
		evt.preventDefault();
			if (evt.keyCode === 27) {
				if (cartPopup.classList.contains("modal-show")) {
					cartPopup.classList.remove("modal-show");
					overlay.classList.remove("modal-show-overlay");
				}
			}
	});