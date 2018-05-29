import {TimelineMax} from "gsap";
import "gsap/ScrollToPlugin";

const $button = $(".scroll-top");

function scrollTo(offsetY, callback) {
  new TimelineMax()
    .to(window, 1, {
      scrollTo: offsetY,
      ease: Power2.easeOut,
      onComplete: function () {
        if (callback instanceof Function) {
          callback();
        }
      }
    });
}

$button.on("click", function () {
  scrollTo(0);
});

$("a").on("click", function (e) {
  let $link = $(this);
  let url = $link.attr("href");

  if (url.length > 1 && url[0] === "#") {
    e.preventDefault();

    let $target = $(url);

    if ($target.length > 0) {
      let pos = $target.offset();

      scrollTo(pos.top, function () {
        // document.location.hash = url;
      });
    }
  }
});