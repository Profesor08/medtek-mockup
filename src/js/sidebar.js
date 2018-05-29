import {TimelineMax} from "gsap";

let $body = $("body");
let $sidebar = $(".sidebar");
let $background = $(".sidebar-background");
let $closeButton = $sidebar.find(".close-button");
let $openButton = $(".header .navbar-toggler");

$openButton.on("click", function () {
  open();
});

$closeButton.on("click", function () {
  close();
});

$background.on("click", function () {
  close();
});

$sidebar.find("a").on("click", function () {
  close();
});

function open() {
  $sidebar.addClass("is-active");
  $body.addClass("no-scroll");

  new TimelineMax()
    .set($background, {
      left: 0
    })
    .to($background, .5, {
      opacity: 1
    });
}

function close() {
  $sidebar.removeClass("is-active");
  $body.removeClass("no-scroll");

  new TimelineMax()
    .to($background, .5, {
      opacity: 0
    })
    .set($background, {
      left: "100%"
    });
}