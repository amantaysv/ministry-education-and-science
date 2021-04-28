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
