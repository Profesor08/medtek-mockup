import {TimelineMax} from "gsap";

function initMaps(key, callback) {

  function initMap_12301283718923() {
    callback(window.google);
  }

  window.initMap_12301283718923 = initMap_12301283718923;


  let script = document.createElement("script");

  document.body.appendChild(script);

  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap_12301283718923`;
}

initMaps("AIzaSyAweYwe0LXIkV0EUyQpFeKrLI3O9_G9By0", function () {
  let center = {
    lat: 55.6684835,
    lng: 37.5210227
  };

  let medtek = {
    lat: 55.668509,
    lng: 37.523208
  };

  if (window.innerWidth <= 768) {
    center = {
      lat: 55.669925,
      lng: 37.523102
    }
  }

  let map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 17,
    center: center,
    styles: [
      {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "color": "#909090"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "saturation": "-100"
          },
          {
            "weight": "0.01"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": "-100"
          },
          {
            "lightness": "47"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "saturation": "-100"
          },
          {
            "lightness": "20"
          },
          {
            "weight": "0.01"
          },
          {
            "gamma": "0.67"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#999696"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "saturation": "-100"
          },
          {
            "lightness": "100"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "color": "#797575"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#808080"
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
          {
            "gamma": "3.22"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#c0e4f3"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#c7edf7"
          }
        ]
      }
    ]
  });

  let marker = new google.maps.Marker({
    position: medtek,
    icon: require("../images/logo-pict.svg"),
    map: map
  });

  marker.addListener('click', function() {
    open();
  });

});

let $bg = $(".map-section .popup-background");
let $popup = $(".map-section .map-popup");

$bg.on("click", function () {
  close();
});

open();

function open() {
  new TimelineMax()
    .set($bg, {
      display: "block"
    })
    .to($bg, .5, {
      opacity: 1
    });

  new TimelineMax()
    .set($popup, {
      display: "flex"
    })
    .to($popup, .5, {
      opacity: 1,
      x: 0
    });
}

function close() {
  new TimelineMax()
    .to($bg, .5, {
      opacity: 0
    })
    .set($bg, {
      display: "none"
    });

  new TimelineMax()
    .to($popup, .5, {
      opacity: 0,
      x: -25
    })
    .set($popup, {
      display: "none"
    });
}