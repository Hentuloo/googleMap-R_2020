import { quizCountries } from "./quizConfig";

type Callback = (countryName: string) => void;

export const onClickCountry = (callback: Callback) => {
  const countries = document.querySelectorAll<HTMLElement>(".card__list-item");

  if (countries.length === 0) return;
  countries.forEach((country) =>
    country.addEventListener("click", () => {
      const countryName = country.dataset.country;
      if (!countryName) return;
      const countryByName = quizCountries[countryName];
      if (!countryByName) {
        return console.error("There is no such country (quiz/quizCountries)");
      }
      callback(countryName);
    })
  );
};
