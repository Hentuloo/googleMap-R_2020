import { quizCountries, quizCities } from "./quizConfig";
import init, { createMarker } from "../googleMap";
import { City } from "./types";
import placeSvg from "../../assets/markerPlace.svg";

export interface CityMarker {
  city: City;
  marker: google.maps.Marker;
}
export type LoadCitiesMarkersResponse = CityMarker[];

export const initMap = (containerName: string) => {
  return init(containerName, {
    disableDefaultUI: true,

    styles: [
      { elementType: "geometry", stylers: [{ color: "#252525" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "" }],
      },

      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#000000" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#252525" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#252525" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#252525" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#000000" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ffffff" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#000000" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#000000" }],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  });
};

export const loadCitiesMarkers = (
  map: google.maps.Map<Element>,
  countryName: string,
  move?: boolean
): LoadCitiesMarkersResponse | void => {
  const country = quizCountries[countryName];
  if (!country) {
    return console.error("There is no such country (quiz/quizMap)");
  }

  const { cities, lng, lat } = quizCities[country.citiesId];
  if (move) {
    const center = new google.maps.LatLng(lat, lng);
    map.panTo(center);
  }
  return cities.map((city) => {
    const { lat, lng } = city;
    const marker = createMarker(map, new google.maps.LatLng(lat, lng), {
      icon: placeSvg,
    });
    return { city, marker };
  });
};
