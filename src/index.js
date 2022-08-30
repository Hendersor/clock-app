"use strict";
//1. Conectarse a la API y retornar el valor deseado
//2. Usar ese valor en la otra coneccion de la API
//3. Una vez conectado desplegar esa data y modificarla
const apiLocation =
  "https://api.ipbase.com/v2/info?apikey=0CaYR2iagldHav1ltslfW8vJbyP3yW3swiDit7Dy&ip=1.1.1.1";

const apiTime = "http://worldtimeapi.org/api/timezone";
const apiQuotes = "https://programming-quotes-api.herokuapp.com/Quotes/random";

const quoteApiConection = async (apiQuotes) => {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const responseQuote = await fetch(apiQuotes);
  const quoteData = await responseQuote.json();
  quote.innerText = quoteData.en;
  author.innerText = quoteData.author;
};

const refreshIcon = document.getElementById("refreshIcon");
refreshIcon.addEventListener("click", quoteApiConection(apiQuotes));

const conectionAPI = async (apiLocation, apiTime) => {
  const responseLocation = await fetch(apiLocation);
  const dataLocation = await responseLocation.json();
  const location = dataLocation.data.timezone.id;

  const apiTimeURL = `${apiTime}/${location}`;
  const resposeTime = await fetch(apiTimeURL);
  const dataTime = await resposeTime.json();

  deployMainData(dataTime, dataLocation);
  //   deployMoreData(dataTime, dataLocation);
};

(async () => {
  console.log(await conectionAPI(apiLocation, apiTime));
})();

function deployMainData(dataTime, dataLocation) {
  console.log(dataLocation, dataLocation);
  const abbreviation = document.getElementById("abbreviation");
  abbreviation.innerText = dataTime.abbreviation;

  const state = document.getElementById("state");
  state.innerText = dataLocation.data.location.region.name.toUpperCase();

  const country = document.getElementById("country");
  country.innerText = dataLocation.data.location.country.alpha3;
}

function deployMoreData(dataTime, dataLocation) {
  console.log(dataTime);
  const timeZone = document.getElementById("timeZone");
  timeZone.innerText = `${dataLocation.data.location.continent.name}/${dataLocation.data.location.country.name}`;

  const dayOfTheYear = document.getElementById("dayOfTheYear");
  dayOfTheYear.innerText = dataTime.day_of_year;

  const dayOfTheWeek = document.getElementById("dayOfTheWeek");
  dayOfTheWeek.innerText = dataTime.day_of_week;
}
