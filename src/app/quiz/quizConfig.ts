import { Cities, Countries } from "./types";

export const config = {
  rounds: 5,
};

export const quizCountries: Countries = {
  pl: {
    countryName: "POLAND",
    citiesId: 0,
  },
  esp: {
    countryName: "ESPANIA",
    citiesId: 1,
  },
};

export const quizCities: Cities = {
  0: {
    countryName: "POLAND",
    lat: 52.24462,
    lng: 20.994628,
    cities: [
      {
        name: "Warszawa",
        lat: 52.229675,
        lng: 21.01223,
        places: [
          {
            name: "Zamek Królewski w Warszawie",
            points: 6,
          },
          {
            name: "Łazienki Królewskie",
            points: 8,
          },
          {
            name: "Rynek Starego Miasta Warszawa",
            points: 8,
          },
          {
            name: "Pałac Kultury i Nauki",
            points: 7,
          },
          {
            name: "Pałac w Wilanowie",
            points: 5,
          },
          {
            name: "Grób Nieznanego Żołnierza",
            points: 5,
          },
          {
            name: "Muzeum Fryderyka Chopina w Warszawie",
            points: 4,
          },
          {
            name: "Stare Miasto",
            points: 3,
          },
        ],
      },
      {
        name: "Toruń",
        lat: 53.015331,
        lng: 18.6057,
        places: [
          {
            name: "Żywe Muzeum Piernika",
            points: 7,
          },
          {
            name: "Krzywa Wieża",
            points: 6,
          },
          {
            name: "Pomnik Mikołaja Kopernika w Toruniu",
            points: 9,
          },
          {
            name: "Uniwersytet Mikołaja Kopernika w Toruniu",
            points: 8,
          },
        ],
      },
      {
        name: "Zakopane",
        lat: 49.299171,
        lng: 19.94902,
        places: [
          {
            name: "Giewont",
            points: 9,
          },
          {
            name: "Rysy",
            points: 8,
          },
          {
            name: "Krupówki",
            points: 7,
          },
          {
            name: "Morskie Oko",
            points: 10,
          },
          {
            name: "Tatrzański Park Narodowy",
            points: 6,
          },
          {
            name: "Kasprowy Wierch",
            points: 5,
          },
        ],
      },
      {
        name: "Poznań",
        lat: 52.406376,
        lng: 16.925167,
        places: [
          {
            name: "Zamek Cesarski",
            points: 9,
          },
          {
            name: "Stary Rynek",
            points: 10,
          },
          {
            name: "Jezioro Maltańskie",
            points: 8,
          },
          {
            name: "Park Cytadela",
            points: 7,
          },
          {
            name: "Rogalowe Muzeum",
            points: 6,
          },
          {
            name: "Zamek Królewski w Poznaniu",
            points: 5,
          },
        ],
      },
      {
        name: "Płock",
        lat: 52.546345,
        lng: 19.706535,
        places: [
          {
            name: "Molo",
            points: 8,
          },
          {
            name: "Jezioro Białe",
            points: 7,
          },
          {
            name: "Miejski Ogród Zoologiczny",
            points: 10,
          },
          {
            name: "Wzgórze Tumskie",
            points: 5,
          },
          {
            name: "Most Solidarności",
            points: 5,
          },
          {
            name: "Bazylika Katedralna Wniebowzięcia NMP",
            points: 9,
          },
        ],
      },
      {
        name: "Kraków",
        lat: 50.064651,
        lng: 19.944981,
        places: [
          {
            name: "Zamek Królewski na Wawelu",
            points: 6,
          },
          {
            name: "Sukiennice",
            points: 7,
          },
          {
            name: "Bazylika Mariacka",
            points: 8,
          },
          {
            name: "Kopalnia Soli „Wieliczka”",
            points: 10,
          },
          {
            name: "Katedra Wawelska",
            points: 6,
          },
          {
            name: "Brama Floriańska",
            points: 5,
          },
          {
            name: "Barbakan Krakowski",
            points: 4,
          },
        ],
      },
      {
        name: "Łódź",
        lat: 51.766565,
        lng: 19.458771,
        places: [
          {
            name: "Piotrkowska",
            points: 10,
          },
          {
            name: "Centralne Muzeum Włókiennictwa w Łodzi",
            points: 6,
          },
          {
            name: "Muzeum Pałac Herbsta. Oddział Muzeum Sztuki w Łodzi",
            points: 9,
          },
          {
            name: "Muzeum Miasta Łodzi",
            points: 7,
          },
          {
            name: "Ogród Botaniczny w Łodzi",
            points: 10,
          },
          {
            name: "Palmiarnia Ogrodu Botanicznego",
            points: 5,
          },
        ],
      },
      {
        name: "Wrocław",
        lat: 51.10266,
        lng: 17.02607,
        places: [
          {
            name: "Panorama Racławicka",
            points: 8,
          },
          {
            name: "Muzeum Sztuki Mieszczańskej",
            points: 7,
          },
          {
            name: "ZOO Wrocław sp.z o.o.",
            points: 7,
          },
          {
            name: "Afrykarium (oceanarium w ZOO Wrocław)",
            points: 6,
          },
          {
            name: "Ogród Japoński",
            points: 5,
          },
          {
            name: "Rynek",
            points: 10,
          },
        ],
      },
      {
        name: "Gdańsk",
        lat: 54.347752,
        lng: 18.635572,
        places: [
          {
            name: "Bazylika Mariacka Wniebowzięcia Najświętszej Maryi Panny",
            points: 10,
          },
          {
            name: "Westerplatte",
            points: 9,
          },
          {
            name: "Fontanna Neptuna",
            points: 7,
          },
          {
            name: "Długi Targ",
            points: 6,
          },
          {
            name: "Złota Brama",
            points: 6,
          },
          {
            name: "Molo w Sopocie",
            points: 7,
          },
        ],
      },
      {
        name: "Białystok",
        lat: 53.127822,
        lng: 23.152325,
        places: [
          {
            name: "Puszcza Knyszyńska",
            points: 9,
          },
          {
            name: "Podlaskie Muzeum Kultury Ludowej",
            points: 7,
          },
          {
            name: "Akcent ZOO",
            points: 6,
          },
          {
            name: "Pałac Branickich",
            points: 10,
          },
          {
            name: "Bazylika Mniejsza św. Rocha",
            points: 6,
          },
        ],
      },
    ],
  },
  1: {
    countryName: "ESPANIA",
    lat: 40.461577,
    lng: -3.73397,
    cities: [
      {
        name: "Barcelona",
        lat: 41.385052,
        lng: 2.169844,
        places: [
          {
            name: "plaża Barceloneta",
            points: 7,
          },
          {
            name: "MUZEUM PABLA PICASSA i MNAC",
            points: 8,
          },
          {
            name: "Park Guell",
            points: 10,
          },
        ],
      },
      {
        name: "Madryt",
        lat: 40.396764,
        lng: -3.718827,
        places: [
          {
            name: "Plac Mayor",
            points: 8,
          },
          {
            name: "Świątynia Debod",
            points: 7,
          },
          {
            name: "Muzeum El Prado",
            points: 9,
          },
        ],
      },
      {
        name: "Sewilla",
        lat: 37.374523,
        lng: -5.987507,
        places: [
          {
            name: "Taniec Flamenco",
            points: 8,
          },
          {
            name: "Plac de Espana",
            points: 10,
          },
          {
            name: " Pałac Alcazar",
            points: 8,
          },
          {
            name: "Katedra Najświętszej Marii Panny",
            points: 6,
          },
        ],
      },
      {
        name: "Granada",
        lat: 37.177826,
        lng: -3.619949,
        places: [
          {
            name: "Rzeka Genil",
            points: 6,
          },
          {
            name: "Alhambra",
            points: 10,
          },
          {
            name: "ogrody Generalife",
            points: 9,
          },
        ],
      },
      {
        name: "Kordoba",
        lat: 37.870517,
        lng: -4.789993,
        places: [
          {
            name: "Mezquita- Wielki Meczet",
            points: 8,
          },
          {
            name: "Most Rzymski",
            points: 10,
          },
          {
            name: "Patio Ruta de Patios Del AlcazarViejo",
            points: 9,
          },
          {
            name: "Stare Miasto",
            points: 7,
          },
        ],
      },
      {
        name: "Malaga",
        lat: 36.712467,
        lng: -4.449427,
        places: [
          {
            name: "wybrzeże Costa del Sol",
            points: 10,
          },
          {
            name: "Dom Pabla Picassa",
            points: 9,
          },
          {
            name: "Zamek Gibralfaro",
            points: 8,
          },
          {
            name: "Pałac Alcazaba",
            points: 8,
          },
        ],
      },
    ],
  },
};
