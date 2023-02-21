
const mapImg = document.querySelector(".map__inner-scope__map-img");

const tabs = document.querySelector(".map__inner-tabs__list");

const tabsAll = document.querySelectorAll(".map__inner-tabs__area");

const fold = document.querySelector(".map__inner-tabs__fold");

const items = document.querySelector(".map__inner-tabs__items");


tabs.onclick = (e) => {
  mapImg.src = `./images/map-${e.target.id}.png`;
  console.log(tabsAll);
  for (let i = 0; i < tabsAll.length; i++) {
    tabsAll[i].classList.remove("active");
  }
  e.target.classList.add("active");
};

fold.onclick = () => {
  fold.classList.toggle("active");
  items.classList.toggle("dn");
  tabs.classList.toggle("opacity");
  mapImg.classList.toggle("opacity");
};
