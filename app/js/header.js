
const mapImg = document.querySelector(".map__inner-scope__map-img");

const tabs = document.querySelector(".map__inner-tabs__list");

const tabsAll = document.querySelectorAll(".map__inner-tabs__area");

const fold = document.querySelector(".map__inner-tabs__fold");

const items = document.querySelector(".map__inner-tabs__items");

const image = document.querySelector('.business__lines-adap');



 new Swiper('.mySwiper' , {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

tabs.onclick = (e) => {
  mapImg.src = `./images/map-${e.target.id}.png`;
  for (let i = 0; i < tabsAll.length; i++) {
    tabsAll[i].classList.remove("active");
  }
  e.target.classList.add("active");
};

image.onclick = (e) => {
  e.target.classList.toggle("active");
}

fold.onclick = () => {
  fold.classList.toggle("active");
  items.classList.toggle("dn");
  tabs.classList.toggle("opacity");
  mapImg.classList.toggle("opacity");
};
