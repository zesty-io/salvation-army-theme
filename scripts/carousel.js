const myCarousel = document.getElementById("carousel");

const prevBtn = myCarousel.querySelector(".carousel-control-prev");
const nextBtn = myCarousel.querySelector(".carousel-control-next");

const items = myCarousel.querySelectorAll(".carousel-item");

myCarousel.addEventListener("slide.bs.carousel", (event) => {
	if (event.to === 0) {
		prevBtn.classList.add("hide");
	} else prevBtn.classList.remove("hide");

	if (event.to === items.length - 1) nextBtn.classList.add("hide");
	else nextBtn.classList.remove("hide");
});
