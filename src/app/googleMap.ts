import { googleMapConfig } from "./config";

export const init = (selector: string, opts: google.maps.MapOptions = {}) => {
  const container = document.querySelector(selector);
  if (container) {
    return new google.maps.Map(container, {
      ...googleMapConfig.initOptions,
      ...opts,
    });
  }
  return null;
};

export const createMarker = (
  map: google.maps.Map,
  location: google.maps.LatLng,
  opts?: google.maps.ReadonlyMarkerOptions
) => {
  return new google.maps.Marker({
    position: location,
    map: map,
    ...opts,
  });
};

export default init;
