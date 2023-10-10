import "src/scss/map.scss";
import { getEarthquakeList, getSelectedLocation } from "./requests";
import { formatDate } from "./helper";
import { setMapDetails } from "./mapdetails";

((g) => {
  var h,
    a,
    k,
    p = "The Google Maps JavaScript API",
    c = "google",
    l = "importLibrary",
    q = "__ib__",
    m = document,
    b = window;
  b = b[c] || (b[c] = {});
  var d = b.maps || (b.maps = {}),
    r = new Set(),
    e = new URLSearchParams(),
    u = () =>
      h ||
      (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g)
          e.set(
            k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
            g[k]
          );
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => (h = n(Error(p + " could not load.")));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
      }));
  d[l]
    ? console.warn(p + " only loads once. Ignoring:", g)
    : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({ key: "AIzaSyDBSAabB8xXwBFz3Qro7_hHxyhBxOgJcNg", v: "weekly" });

let map;

async function initMap(features) {
  const { Map } = await google.maps.importLibrary("maps");

  const centerProps =
    features.length > 0
      ? {
          lat: features[0].geometry.coordinates[1],
          lng: features[0].geometry.coordinates[0],
        }
      : {};

  map = new Map(document.getElementById("map"), {
    center: centerProps,
    zoom: 8,
  });

  initMarkers(features);
}

const initMarkers = (features) => {
  features.map((feature, index) => {
    const marker = new google.maps.Marker({
      position: {
        lat: feature.geometry.coordinates[1],
        lng: feature.geometry.coordinates[0],
      },
      map,
    });

    const infoWindow = new google.maps.InfoWindow();
    let boxText = document.createElement("div");
    boxText.id = index;
    boxText.innerHTML = `${feature.properties.place}<br/>${formatDate(
      feature.properties.time
    )}`;

    marker.addListener(
      "click",
      ((marker) => () => {
        infoWindow.setContent(boxText);
        infoWindow.open(map, marker);
      })(marker)
    );

    google.maps.event.addDomListener(
      boxText,
      "click",
      () => setMapDetails(feature.properties.detail)
    );
  });
};

let earthquakeList = [];

// fetch earthquake list from the API
getEarthquakeList({
  success: (response) => {
    earthquakeList = response.data.features;
    initMap(earthquakeList);
  },
  error: (error) => {},
  completed: () => {},
});

export { initMap };
