import {TimelineMax} from "gsap";
import Ticker from "./Ticker";
import Hammer from "hammerjs";

let $sliderContainer = $(".about-section");
let $slider = $sliderContainer.find(".slider");
let $sliderInner = $slider.find(".slider-inner");
let $slides = $sliderInner.children();
let $dots = $slider.find(".nav-dot");

let startMoving = false;

let sliderSize = 0;
let slideSize = 0;


let mouseX = 0;
let posX = 0;
let canSwipe = false;

let slidesAtLeft = 0;


let mc = new Hammer($sliderContainer.get(0));

// listen to events...
mc.on("panstart", function (e) {
  sliderSize = $slider.outerWidth();
  slideSize = $slides.outerWidth();
  mouseX = e.center.x;

  if (slideSize * $slides.length - 30 > sliderSize) {
    startMoving = true;
  }
});

mc.on("panend", function (e) {
  startMoving = false;
  canSwipe = false;
  reset();
});

mc.on("panleft panright", function (e) {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    e.preventDefault();
    move(e.deltaX);
  }
});


// $sliderContainer.on("mousedown touchstart", function (e) {
//   sliderSize = $slider.outerWidth();
//   slideSize = $slides.outerWidth();
//   mouseX = e.clientX || e.touches[0].clientX;
//
//   if (slideSize * $slides.length - 30 > sliderSize) {
//     startMoving = true;
//   }
// });
//
// $sliderContainer.on("mouseup touchend", function (e) {
//   startMoving = false;
//   canSwipe = false;
//   reset();
// });
//
// $sliderContainer.on("mousemove touchmove", function (e) {
//   if (startMoving === true) {
//     let x = e.clientX || e.touches[0].clientX;
//     move(x - mouseX);
//   }
// });

let width = window.innerWidth;

Ticker.add(function () {
  if (width !== window.innerWidth) {
    width = window.innerWidth;

    slidesAtLeft = 0;
    mouseX = 0;
    posX = 0;

    new TimelineMax().to($sliderInner, .5, {
      x: 0,
      force3D: true
    });
  }
});

function move(offset) {

  if (canSwipe === true) {
    return;
  }

  offset /= 2;

  if (Math.abs(offset) > 35) {
    canSwipe = true;
    swipe(offset);
    return;
  }
  else {
    canSwipe = false;
  }

  new TimelineMax().to($sliderInner, .3, {
    x: posX + offset,
    force3D: true
  });
}

function swipe(offset) {

  if (offset < 0) {
    if (slidesAtLeft < ($slides.length - sliderSize / slideSize) - 1) {
      slidesAtLeft++;
      posX = -slideSize * slidesAtLeft;

      new TimelineMax().to($sliderInner, .5, {
        x: posX,
        force3D: true
      });

      updateDots();
    }
  }
  else if (offset > 0) {
    if (slidesAtLeft > 0) {
      slidesAtLeft--;
      posX = -slideSize * slidesAtLeft;

      new TimelineMax().to($sliderInner, .5, {
        x: posX,
        force3D: true
      });

      updateDots();
    }
  }
}

function reset() {
  new TimelineMax().to($sliderInner, .5, {
    x: -slideSize * slidesAtLeft
  });
}

function updateDots() {
  $dots.removeClass("is-active");
  $($dots.get(slidesAtLeft)).addClass("is-active");
}