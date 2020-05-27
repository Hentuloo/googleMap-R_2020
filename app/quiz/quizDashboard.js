const tryGetElement = (className) => {
  const el = document.querySelector(className);
  if (!el) {
    console.error(`There isn't element such (${className})`);
    return null;
  }
  return el;
};
const tryGetElements = (className) => {
  const el = document.querySelectorAll(className);
  if (el.length === 0) {
    return console.error(`There isn't element such (${className})`);
    return null;
  }
  return el;
};
const getTitleEl = () => tryGetElement(".game__title");
const getContentEl = () => tryGetElement(".game__content");
const getPointsEl = () => {
  const el = tryGetElements(".game__score");
  return el ? el[0] : null;
};
const getRoundEl = () => {
  const el = tryGetElements(".game__score");
  return el ? el[1] : null;
};

const toggleElementVisible = (element, cl, forceHide) => {
  if (forceHide === undefined) element && element.classList.toggle(cl);
  else {
    element && element.classList[forceHide ? "add" : "remove"](cl);
  }
};

const hideDashboard = () => {
  toggleElementVisible(getTitleEl(), "game__title--hide", true);
  toggleElementVisible(getContentEl(), "game__content--hide", true);
  toggleElementVisible(getPointsEl(), "game__score--hide", true);
  toggleElementVisible(getRoundEl(), "game__score--hide", true);
};

const showChooseCityStatement = () => {
  const text = getTitleEl();
  if (text) {
    text.textContent = "Wskaż miasto na mapie";
    toggleElementVisible(text, "game__title--hide", false);
  }

  toggleElementVisible(getContentEl(), "game__content--hide", true);
  toggleElementVisible(getPointsEl(), "game__score--hide", true);
  toggleElementVisible(getRoundEl(), "game__score--hide", true);
};
const createContentItem = (points, text, onClick) => {
  const label = document.createElement("label");
  label.setAttribute("class", "input__label input__label--radio");
  const input = document.createElement("input");
  input.setAttribute("class", "input input--radio");
  input.setAttribute("type", "radio");
  input.setAttribute("name", "quziRatio");
  input.addEventListener("click", () => onClick(points));
  const span = document.createElement("span");
  span.setAttribute("class", "input__text");
  span.innerText = text;

  label.appendChild(input);
  label.appendChild(span);

  return label;
};

const showCityQuiz = (city, onClickInput) => {
  const text = getTitleEl();
  if (text) {
    text.textContent = `Z czego najbardziej słynie ${city.name}:`;
    toggleElementVisible(text, "game__title--hide", false);
  }
  const content = getContentEl();
  if (!content) return;
  content.innerHTML = "";

  const documentFragment = document.createDocumentFragment();
  city.places.map(({ name, points }) =>
    documentFragment.appendChild(createContentItem(points, name, onClickInput))
  );
  content.appendChild(documentFragment);

  toggleElementVisible(content, "game__content--hide", false);
};
const displayNewTitle = (title) => {
  const text = getTitleEl();
  if (text) {
    text.innerHTML = title;
    toggleElementVisible(text, "game__title--hide", false);
  }
};
const displayNewPoints = (score, round) => {
  const points = getPointsEl();
  const rounds = getRoundEl();
  if (!points || !rounds) return;
  points.textContent = `PKT: ${score}/${round * 10}`;
  rounds.textContent = `runda: ${round}/${quizConfig.rounds}`;
  toggleElementVisible(points, "game__score--hide", false);
  toggleElementVisible(rounds, "game__score--hide", false);
};

const showNewPoints = (newPoints, score, round) => {
  displayNewTitle(
    `Zdobyłeś <span>${newPoints}pkt!</span> Wybierz kolejne miasto!`
  );
  displayNewPoints(score, round);
  toggleElementVisible(getContentEl(), "game__content--hide", true);
};
const createButton = (text) => {
  const button = document.createElement("button");
  button.setAttribute("class", "button button--border");
  button.innerText = text;
  return button;
};
const showEndGameStatement = (score, round, handleAgainButton) => {
  displayNewTitle(
    `Koniec gry! Twój wynik to: <span>${score}/${round * 10}</span>`
  );
  const btn = createButton("Jeszcze raz!");
  btn.addEventListener("click", handleAgainButton);
  displayNewPoints(score, round);
  const content = getContentEl();
  if (!content) return;
  content.innerHTML = "";
  content.appendChild(btn);
};
const chooseCountryStatement = () => {
  displayNewTitle(`Wybierz kraj z dostępnych quizów`);
};
