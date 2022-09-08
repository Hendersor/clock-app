"use strict";

//Sacar la IP
//Usar la IP para sacar la ubicacion
//Usar esa ubicacion para sacar el tiempo de la zona
const apiLocation =
  "https://api.ipbase.com/v2/info?apikey=0CaYR2iagldHav1ltslfW8vJbyP3yW3swiDit7Dy&ip=";

const apiTime = "http://worldtimeapi.org/api/timezone";
const apiQuotes = "https://programming-quotes-api.herokuapp.com/Quotes/random";
const apiKey = "884e36038e2965a033f2f42b1f5f883da868c95060b39832b73d9974";

const quoteApiConection = async () => {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const responseQuote = await fetch(apiQuotes);
  const quoteData = await responseQuote.json();
  quote.innerText = quoteData.en;
  author.innerText = quoteData.author;
};
quoteApiConection();

const refreshIcon = document.getElementById("refreshIcon");
refreshIcon.addEventListener("click", quoteApiConection);

const conectionAPI = async (apiLocation, apiTime) => {
  const getData = await fetch(`https://api.ipdata.co?api-key=${apiKey}`);
  const userIp = await getData.json(); // Obtener la IP del usuario

  // const responseLocation = await fetch(`${apiLocation}${userIp.ip}`);
  // const dataLocation = await responseLocation.json();
  // const userLocation = dataLocation.data.timezone.id;
  //Por medio de la IP obtener la ubicacion del usuario

  const apiTimeConection = await fetch(`${apiTime}/America/Mexico_City`);
  const apiDataTime = await apiTimeConection.json(); //Obtenemos los datos de la zona horaria del usuario

  const location = apiDataTime.timezone;
  const apiTimeURL = `${apiTime}/${location}`;
  const resposeTime = await fetch(apiTimeURL);
  const dataTime = await resposeTime.json();
  deployMainData(apiDataTime); //Agregar dataTime, dataLocation como parametros de entrada
  // deployMoreData(dataTime, dataLocation);
};

(async () => {
  console.log(await conectionAPI(apiLocation, apiTime));
})();

function showTime() {
  const dateTime = new Date();
  const hrs = dateTime.getHours();
  const min = dateTime.getMinutes();

  document.getElementById("hrs").innerText = hrs;
  document.getElementById("min").innerText = min;
}

function deployMainData(apiDataTime) {
  console.log(apiDataTime);
  setInterval(showTime, 10);

  const timeZone = apiDataTime.datetime;

  const abbreviation = document.getElementById("abbreviation");
  abbreviation.innerText = dataTime.abbreviation;

  const state = document.getElementById("state");
  state.innerText = dataLocation.data.location.region.name.toUpperCase();

  const country = document.getElementById("country");
  country.innerText = dataLocation.data.location.country.alpha3;
}

function deployMoreData(dataTime, dataLocation) {
  const timeZone = document.getElementById("timeZone");
  timeZone.innerText = `${dataLocation.data.location.continent.name}/${dataLocation.data.location.country.name}`;

  const dayOfTheYear = document.getElementById("dayOfTheYear");
  dayOfTheYear.innerText = dataTime.day_of_year;

  const dayOfTheWeek = document.getElementById("dayOfTheWeek");
  dayOfTheWeek.innerText = dataTime.day_of_week;
}
