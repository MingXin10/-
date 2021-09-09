// let s = skrollr.init();
//--------------------------------------------------------輪播牆--------------------------------------------------------
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
//--------------------------------------------------------navbar 變化--------------------------------------------------------
$(document).ready(function () {
  $("nav").removeClass("hide");
});
function navbarChange() {
  const width = $(window).width();
  if (width > 991) {
    if ($(window).scrollTop() > 0) {
      $("#navbar").addClass("navWhite");
      $("#navbar").removeClass("transparent");
      $("#navbar").removeClass("navBack");
      $("li a").addClass("black");
      $("#nav-fb").addClass("black");
    } else {
      $("#navbar").removeClass("navWhite");
      $("#navbar").removeClass("transparent");
      $("#navbar").removeClass("navBack");
      $("li a").removeClass("black");
      $("#nav-fb").removeClass("black");
    }
  } else {
    if ($(window).scrollTop() > 0) {
      $("#navbar").addClass("navBack");
      $("#navbar").removeClass("transparent");
      $("#navbar").removeClass("navWhite");
    } else {
      $("#navbar").addClass("transparent");
      $("#navbar").removeClass("navBack");
      $("#navbar").removeClass("navWhite");
    }
  }
  //--------------------------------------------------------navbar logo--------------------------------------------------------
  if ($(window).scrollTop() > 0) {
    $("#logo").removeClass("logo-big");
    $("#logo").addClass("logo-small");
  } else {
    $("#logo").removeClass("logo-small");
    $("#logo").addClass("logo-big");
  }
}
$(window).resize(function () {
  navbarChange();
});
//--------------------------------------------------------視差滾動--------------------------------------------------------
$(window).scroll(function () {
  changeImgPosition();
  sausage();
  navbarChange();
});

function changeImgPosition() {
  const percentage =
    ($(this).scrollTop() / ($("body").height() - $(window).height())) * 100;
  const width = $(window).width();
  //--------------------------------------------------------banner--------------------------------------------------------
  if (percentage > 0) {
    $(".banner img").css("transform", `translateY(${percentage * 10}px)`);
  } else if (percentage == 0) {
    $(".banner img").css("transform", `translateY(0px)`);
  }
  if (width > 991) {
    //--------------------------------------------------------24小時購物--------------------------------------------------------
    if (percentage > 5) {
      $(".24hrleft").css("transform", "translateX(0px)").css("opacity", 1);
      $(".24hrmid").css("transform", "translateY(0px)").css("opacity", 1);
      $(".24hrright").css("transform", "translateX(0px)").css("opacity", 1);
    } else {
      $(".24hrleft").css("transform", "translateX(-150px)").css("opacity", 0);
      $(".24hrmid").css("transform", "translateY(150px)").css("opacity", 0);
      $(".24hrright").css("transform", "translateX(150px)").css("opacity", 0);
    }
    //--------------------------------------------------------最新消息大字--------------------------------------------------------
    if (percentage > 20) {
      $(".p1Text").css("opacity", 1).css("bottom", 0);
      $(".p2Text").css("opacity", 1).css("top", 0);
    } else {
      $(".p1Text").css("opacity", 0).css("bottom", "100px");
      $(".p2Text").css("opacity", 0).css("top", "100px");
    }
    //--------------------------------------------------------不變的味道--------------------------------------------------------
    if (percentage > 55) {
      $(".plateleft").css("transform", "translateX(0px)").css("opacity", 1);
      $(".platemid").css("transform", "translateY(0px)").css("opacity", 1);
      $(".plateright").css("transform", "translateX(0px)").css("opacity", 1);
    } else {
      $(".plateleft").css("transform", "translateX(-150px)").css("opacity", 0);
      $(".platemid").css("transform", "translateY(150px)").css("opacity", 0);
      $(".plateright").css("transform", "translateX(150px)").css("opacity", 0);
    }
  } else {
    //--------------------------------------------------------24小時購物--------------------------------------------------------
    if (percentage > 4) {
      $(".24hrright").css("transform", "translateX(0px)").css("opacity", 1);
    } else {
      $(".24hrright").css("transform", "translateX(-150px)").css("opacity", 0);
    }
    if (percentage > 8) {
      $(".24hrleft").css("transform", "translateX(0px)").css("opacity", 1);
    } else {
      $(".24hrleft").css("transform", "translateX(150px)").css("opacity", 0);
    }
    if (percentage > 11) {
      $(".24hrmid").css("transform", "translateY(0px)").css("opacity", 1);
    } else {
      $(".24hrmid").css("transform", "translateY(150px)").css("opacity", 0);
    }
    //--------------------------------------------------------最新消息大字--------------------------------------------------------
    if (percentage > 23) {
      $(".p1Text").css("opacity", 1).css("bottom", 0);
      $(".p2Text").css("opacity", 1).css("top", 0);
    } else {
      $(".p1Text").css("opacity", 0).css("bottom", "100px");
      $(".p2Text").css("opacity", 0).css("top", "100px");
    }
    //--------------------------------------------------------不變的味道--------------------------------------------------------
    if (percentage > 50) {
      $(".plateleft").css("transform", "translateX(0px)").css("opacity", 1);
    } else {
      $(".plateleft").css("transform", "translateX(150px)").css("opacity", 0);
    }
    if (percentage > 59) {
      $(".platemid").css("transform", "translateX(0px)").css("opacity", 1);
    } else {
      $(".platemid").css("transform", "translateX(-150px)").css("opacity", 0);
    }
    if (percentage > 62) {
      $(".plateright").css("transform", "translateY(0px)").css("opacity", 1);
    } else {
      $(".plateright").css("transform", "translateY(150px)").css("opacity", 0);
    }
  }

  //--------------------------------------------------------最新消息banner--------------------------------------------------------
  if (percentage > 10) {
    $(".newsBanner img").css(
      "transform",
      `translateY(${-150 + percentage * 5}px)`
    );
  }
  //--------------------------------------------------------香腸博物館logo--------------------------------------------------------

  //--------------------------------------------------------香腸博物館banner--------------------------------------------------------
  if (percentage > 35) {
    $(".museum img").css("transform", `translateY(${-250 + percentage * 5}px)`);
  }

  //--------------------------------------------------------小女孩banner--------------------------------------------------------
  if (percentage > 58) {
    $(".girl img").css("transform", `translateY(${-400 + percentage * 5}px)`);
  }
  //--------------------------------------------------------小女孩內容--------------------------------------------------------
  if (width > 1182) {
    if (percentage > 70) {
      $(".play")
        .css("transform", "translate(-50%)")
        .css("top", "35%")
        .css("opacity", 0.7);
      $(".happiness")
        .css("transform", "translate(-50%)")
        .css("bottom", "35%")
        .css("opacity", 1);
    } else {
      $(".play")
        .css("transform", "translate(-50%,0%)")
        .css("top", "0%")
        .css("opacity", 0);
      $(".happiness")
        .css("transform", "translate(-50%,0%)")
        .css("bottom", "0%")
        .css("opacity", 0);
    }
  } else if (width > 991) {
    if (percentage > 65) {
      $(".play")
        .css("transform", "translate(-50%)")
        .css("top", "23%")
        .css("opacity", 0.7);
      $(".happiness")
        .css("transform", "translate(-50%)")
        .css("bottom", "35%")
        .css("opacity", 1);
    } else {
      $(".play")
        .css("transform", "translate(-50%,0%)")
        .css("top", "0%")
        .css("opacity", 0);
      $(".happiness")
        .css("transform", "translate(-50%,0%)")
        .css("bottom", "0%")
        .css("opacity", 0);
    }
  } else {
    if (percentage > 70) {
      $(".play")
        .css("transform", "translate(-50%)")
        .css("top", "25%")
        .css("opacity", 0.7);
      $(".happiness")
        .css("transform", "translate(-50%)")
        .css("bottom", "30%")
        .css("opacity", 1);
    } else {
      $(".play")
        .css("transform", "translate(-50%,0%)")
        .css("top", "0%")
        .css("opacity", 0);
      $(".happiness")
        .css("transform", "translate(-50%,0%)")
        .css("bottom", "0%")
        .css("opacity", 0);
    }
  }
  //--------------------------------------------------------公益活動--------------------------------------------------------
  if (percentage > 80) {
    $(".charityTitle1").css("opacity", 1).css("transform", "translateY(0px)");
    $(".charityTitle2").css("opacity", 1).css("transform", "translateY(0px)");
    $(".linkWrap").css("opacity", 1).css("transform", "translateY(0px)");
  } else {
    $(".charityTitle1")
      .css("opacity", 0)
      .css("transform", "translateY(-100px)");
    $(".charityTitle2").css("opacity", 0).css("transform", "translateY(100px)");
    $(".linkWrap").css("opacity", 0).css("transform", "translateY(100px)");
  }
  console.log(percentage);
}
function sausage() {
  const percentage =
    ($(this).scrollTop() / ($("body").height() - $(window).height())) * 100;
  const width = $(window).width();
  if (width > 767 || width < 479) {
    if (percentage > 45) {
      $(".sausage").css("top", "50%").css("opacity", "1");
    } else {
      $(".sausage").css("top", 0).css("opacity", "0");
    }
  } else if (width > 479) {
    if (percentage > 55) {
      $(".sausage").css("top", "50%").css("opacity", "1");
    } else {
      $(".sausage").css("top", 0).css("opacity", "0");
    }
  }
}
