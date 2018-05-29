import {TimelineMax} from "gsap";

let $services = $(".service");

$services.each(function () {
  let $service = $(this);
  let $button = $service.find(".expand-icon");
  let $body = $service.find(".service-body");
  let isActive = $service.hasClass("expanded");

  if (isActive === true) {
    new TimelineMax()
      .set($body, {
        height: "auto"
      });
  }

  $button.on("click", function () {
    if (isActive === false) {
      open();
    }
    else {
      close();
    }
  });

  function open() {
    isActive = true;

    $service.addClass("expanded");

    new TimelineMax()
      .set($body, {
        height: "auto"
      })
      .from($body, .5, {
        height: 0
      });
  }

  function close() {
    isActive = false;

    $service.removeClass("expanded");
    new TimelineMax()
      .to($body, .5, {
        height: 0,
        onComplete: function () {
        }
      });
  }
});