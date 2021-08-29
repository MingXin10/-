$(".slider div").eq(0).css("background", "#fff"); // 按鈕白色初始化
let circles = document.querySelectorAll(".circle");
let slides = document.querySelectorAll(".banner");
let index = 0;
let myIntervalID = "";

function prev() {
  clearInterval(myIntervalID);
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
  $(".slider div")
    .eq(index)
    .css("background", "#fff")
    .siblings()
    .css("background", "transparent");

  startInterval();
}

function next() {
  clearInterval(myIntervalID);
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
  $(".slider div")
    .eq(index)
    .css("background", "#fff")
    .siblings()
    .css("background", "transparent");
  startInterval();
}

function startInterval() {
  myIntervalID = setInterval(() => {
    if (index > 2) {
      index = 0;
    }
    next();
    $(".slider div")
      .eq(index)
      .css("background", "#fff")
      .siblings()
      .css("background", "transparent");
  }, 4000);
}
startInterval();

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", function () {
    clearInterval(myIntervalID);
    slides[index].classList.remove("active");
    index = $(this).index();
    slides[index].classList.add("active");
    $(this)
      .css("background", "#fff")
      .siblings()
      .css("background", "transparent");
    startInterval();
  });
}
