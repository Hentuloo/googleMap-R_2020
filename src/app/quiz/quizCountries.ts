type Callback = (countryName: string) => void;

//TO-Do: build listeners for all countries list
export const onClickCountry = (callback: Callback) => {
  const country = document.querySelector(".card__list-item");

  if (!country) return;
  country.addEventListener("click", () => {
    callback("pl");
  });
};
