import { Cities, Countries } from "./types";

export const config = {
  rounds: 3,
};

export const quizCountries: Countries = {
  pl: {
    countryName: "POLAND",
    citiesId: 0,
  },
};

export const quizCities: Cities = {
  0: {
    countryName: "POLAND",
    cities: [
      {
        name: "Warszawa",
        lat: 52.229675,
        lng: 21.01223,
        places: [
          {
            name: "Stadion Narodowy",
            points: 4,
          },
        ],
      },
      {
        name: "Płock",
        lat: 52.546345,
        lng: 19.706535,
        places: [
          {
            name: "Stadion Narodowy",
            points: 4,
          },
        ],
      },
      {
        name: "gost",
        lat: 52.546345,
        lng: 17.706535,
        places: [
          {
            name: "Stadion Narodowy",
            points: 4,
          },
        ],
      },
    ],
  },
};
