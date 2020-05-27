const googleMapInit = (selector, opts = {}) => {
  const container = document.querySelector(selector);
  if (container) {
    return new google.maps.Map(container, {
      ...googleMapConfig.initOptions,
      ...opts,
    });
  }
  return null;
};

const createMarker = (map, location, opts) => {
  return new google.maps.Marker({
    position: location,
    map: map,
    ...opts,
  });
};
