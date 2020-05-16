import { googleMapConfig } from "./config";

const initMap = () => {
  const container = document.querySelector(".map__container");
  if (container) {
    return new google.maps.Map(container, googleMapConfig.initOptions);
  }
  return null;
};

const createMarker = (map: google.maps.Map, location: google.maps.LatLng) => {
  return new google.maps.Marker({
    position: location,
    map: map,
  });
};
const toogleNewLocationModal = (forceOpen?: boolean) => {
  const el = document.querySelector(".map__new-location");
  if (!el) return;
  if (forceOpen === undefined) {
    el.classList.remove("map__new-location--hide");
  } else {
    el.classList[forceOpen ? "remove" : "add"]("map__new-location--hide");
  }
};

const getNewLocationInputValue = () => {
  const el = document.querySelector(
    ".map__new-location-input"
  ) as HTMLInputElement;
  if (!el) return null;
  return el.value;
};

const init = () => {
  const markers: google.maps.Marker[] = [];
  const map = initMap();
  const markerInfoWindow = new google.maps.InfoWindow();
  const button = document.querySelector(".map__new-location-button");
  // last marker added by modal-button
  let markerAdded: boolean = false;

  if (!map || !button) return;

  const addMarker = (location: google.maps.LatLng) => {
    toogleNewLocationModal(true);
    // if last marker is not saved by modal button (remove)
    if (!markerAdded && markers.length > 0) {
      markers[markers.length - 1].setMap(null);
      markers.pop();
    }
    markers.push(createMarker(map, location));
    markerAdded = false;
  };

  map.addListener("click", ({ latLng }) => {
    addMarker(latLng);
  });

  button.addEventListener("click", () => {
    if (markerAdded) return;
    toogleNewLocationModal(false);
    const lastAddedMark = markers[markers.length - 1];
    const inputContent = getNewLocationInputValue();
    lastAddedMark.setTitle(inputContent);

    lastAddedMark.addListener("click", () => {
      markerInfoWindow.setContent(inputContent || "Bez nazwy");
      markerInfoWindow.open(map, lastAddedMark);
    });

    markerAdded = true;
  });

  // markers.push(createMarker(map, latLng));
};

export default init;
