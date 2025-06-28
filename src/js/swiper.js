import Swiper from "swiper/bundle";
const sliderInstances = new Map();

<<<<<<< HEAD
export function InitSwiper2(
  selector,
  slidesOffsetAfter = 16,
  slidesOffsetBefore = 16
) {
=======
export function InitSwiper2(selector) {
>>>>>>> 989acf5c829d0dfe03e3a1c6ce0cee08db6fbaf5
  let currentInstance = sliderInstances.get(selector) || null;
  const sliderElement = document.querySelector(selector);
  if (!sliderElement) return;

  function createSwiper() {
    const pagination = sliderElement.querySelector(".swiper-pagination");
    const swiper = new Swiper(sliderElement, {
      slidesPerView: "auto",
      spaceBetween: 16,
<<<<<<< HEAD
      slidesOffsetAfter: slidesOffsetAfter,
      slidesOffsetBefore: slidesOffsetBefore,
=======
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
>>>>>>> 989acf5c829d0dfe03e3a1c6ce0cee08db6fbaf5
      pagination: {
        el: pagination,
        clickable: true,
        bulletClass: "custom-bullet",
        bulletActiveClass: "custom-bullet--active",
      },
    });
    sliderInstances.set(selector, swiper);
    currentInstance = swiper;
  }

  function destroySwiper() {
    if (currentInstance) {
      currentInstance.destroy(true, true);
      sliderInstances.delete(selector);
      currentInstance = null;
    }
<<<<<<< HEAD
    const slides = sliderElement.querySelectorAll(".swiper-slide");
    slides.forEach((slide) => {
      slide.style.width = "";
=======
    const slides = sliderElement.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
      slide.style.width = '';
>>>>>>> 989acf5c829d0dfe03e3a1c6ce0cee08db6fbaf5
    });
  }

  function updateSwiper() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      if (!currentInstance) createSwiper();
    } else {
      destroySwiper();
    }
  }

  window.addEventListener("resize", updateSwiper);
  updateSwiper();
}
