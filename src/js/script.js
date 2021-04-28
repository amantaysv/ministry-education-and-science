$(".carousel").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
});

Array.from(document.getElementsByClassName("slick-arrow")).map((item) => {
  return (item.textContent = "");
});

$("ul.programm-caption").on("click", "li:not(.active)", function () {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest("div.programm-tabs")
    .find("div.programm-content")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});

let development = document.getElementById("development-parallax");
let home = document.getElementById("home-parallax");
let header = document.getElementById("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  development.style.marginTop = value * 0.4 + "px";
  home.style.top = value * 0.5 + "px";
  header.style.top = value * 0.5 + "px";
});
