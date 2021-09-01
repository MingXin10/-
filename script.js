let s = skrollr.init();

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
//
//導覽列變化
$(window).scroll((e) => {
  if ($(window).scrollTop() > 0) {
    $("#navbar").addClass("navWhite");
    $("li a").addClass("black");
    $("#nav-fb").addClass("black");
  } else {
    $("#navbar").removeClass("navWhite");
    $("li a").removeClass("black");
    $("#nav-fb").removeClass("black");
  }
});

$(document).ready(function () {
  $("nav").removeClass("hide");
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $("#logo").removeClass("logo-big");
    $("#logo").addClass("logo-small");
  } else {
    $("#logo").removeClass("logo-small");
    $("#logo").addClass("logo-big");
  }
});

$(window).scroll(function () {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > 850) {
    $(".p1Text").css("opacity", 1).css("bottom", 0);
    $(".p2Text").css("opacity", 1).css("top", 0);
  } else {
    $(".p1Text").css("opacity", 0).css("bottom", "75px");
    $(".p2Text").css("opacity", 0).css("top", "75px");
  }
});
