window.addEventListener("load", () => {
  const nav = document.querySelector(".header__nav");
  const icon = document.querySelector(".header__icon");

  if (nav && icon) {
    icon.addEventListener("click", () => {
      nav.classList.toggle("header__active");
      icon.classList.toggle("header__active");
    });
  }

  const btn = document.querySelector(".dopInfo__btn");
  const overlay = document.querySelector(".overlay");
  const close = document.querySelector(".overlay__close");

  btn.addEventListener("click", function () {
    overlay.style.display = "block";
  });

  close.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  const tabsBtn = document.querySelectorAll(".tabs__list");
  const tabsItems = document.querySelectorAll(".tabs__wrapper");

  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active")) {
        tabsBtn.forEach(function (item) {
          item.classList.remove("active");
        });

        tabsItems.forEach(function (item) {
          item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  }

  document.querySelector(".tabs__list").click();
});
