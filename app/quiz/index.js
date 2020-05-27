const quizGame = () => {
  let activeCountry;
  let score = 0;
  let round = 0;
  const map = quizInitMap(".map__container");
  let isActiveQuiz = false;
  let citiesMarkers = [];

  hideDashboard();
  chooseCountryStatement();
  if (!map)
    return console.error(
      "there isn't container for map (.map__container) in quiz/index"
    );

  const clearMarkers = () => {
    citiesMarkers.forEach(({ marker }) => marker.setMap(null));
    citiesMarkers = [];
  };

  const onClickResetButton = () => {
    activeCountry = null;
    score = 0;
    round = 0;
    hideDashboard();
    chooseCountryStatement();
  };

  const endGame = () => {
    showEndGameStatement(score, round, onClickResetButton);
    clearMarkers();
  };

  const startNewRound = (newPoints) => {
    if (quizConfig.rounds === round) return endGame();
    showNewPoints(newPoints, score, round);
  };

  const onChoseCityInput = (points) => {
    isActiveQuiz = false;
    score += points;
    round += 1;
    startNewRound(points);
  };

  const createCountryMarkers = () => {
    if (!activeCountry) return;
    citiesMarkers = loadCitiesMarkers(map, activeCountry, true) || [];
    citiesMarkers.map(({ marker, city }) =>
      marker.addListener("click", () => {
        if (isActiveQuiz) return;
        showCityQuiz(city, onChoseCityInput);
        marker.setMap(null);
        isActiveQuiz = true;
      })
    );
  };

  //Listen countries-list
  onClickCountry((countryName) => {
    if (!activeCountry) {
      activeCountry = countryName;
      showChooseCityStatement();
      createCountryMarkers();
    }
  });
};
