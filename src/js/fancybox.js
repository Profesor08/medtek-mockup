import "@fancyapps/fancybox/dist/jquery.fancybox";
import "@fancyapps/fancybox/dist/jquery.fancybox.css";

function open(selector) {
  let tpl = $(selector).html();

  $.fancybox.open(tpl, {
    baseClass: "custom-fancybox"
  });
}

$(`[data-modal]`).on("click", function (e) {
  e.preventDefault();
  open($(this).data("modal"));
});

// open("#call-template");