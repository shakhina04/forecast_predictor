// const api_key = "17c85d5f5e00e735385f485e20d913c0";
// const api_url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// const search_box = document.querySelector(".input_box input");
// const search_btn = document.querySelector(".input_box img");
// const weather_icon = document.querySelector("#type_of_weather_icon");

// async function checkWeather(city) {
//   const response = await fetch(api_url + city + `&appid=${api_key}`);
//   var data = await response.json();

//   console.log(data);

//   document.querySelector("#city").innerHTML = data.name;
//   document.querySelector("#main_deg").innerHTML =
//     Math.round(data.main.temp) + "°C";
//   document.querySelector("#main_deg2").innerHTML =
//     Math.round(data.main.feels_like) + "°C";
//   document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector("#wind_speed").innerHTML = data.wind.speed + " km/h";
//   document.querySelector("#pressure").innerHTML = data.main.pressure + "hPa";
//   document.querySelector("#uv").innerHTML = Math.round(data.main.temp_min);

//   document.querySelector("#type_of_weather").innerHTML = data.weather[0].main;

//   if (data.weather[0].main == "Clouds") {
//     weather_icon.src = "img/clouds.png";
//   } else if (data.weather[0].main == "Clear") {
//     weather_icon.src = "img/clear.png";
//   } else if (data.weather[0].main == "Rain") {
//     weather_icon.src = "img/rain.png";
//   } else if (data.weather[0].main == "Drizzle") {
//     weather_icon.src = "img/drizzle.png";
//   } else if (data.weather[0].main == "Mist") {
//     weather_icon.src = "img/mist.png";
//   }
// }
// search_btn.addEventListener("click", () => {
//   checkWeather(search_box.value);
// });



const api_key = '1d0f96626b384baf8e5111243232611'
const api_url = 'https://api.weatherapi.com/v1/current.json?key=1d0f96626b384baf8e5111243232611&q='
// aqi=nox

const search_box = document.querySelector(".input_box input");
const search_btn = document.querySelector(".input_box img");
const weather_icon = document.querySelector("#type_of_weather_icon");
// const city = document.querySelector("#city")


async function checkWeather(city) {

  const response = await fetch(api_url + city  + `&aqi=no`);
  var data = await response.json();

  console.log(data);

  document.querySelector("#city").innerHTML = data.location.name;
  document.querySelector("#main_deg").innerHTML = Math.round(data.current.temp_f) + "°F";
  document.querySelector("#main_deg2").innerHTML ="Feels like:" + Math.round(data.current.feelslike_c) + "°C";
  document.querySelector("#humidity").innerHTML = data.current.humidity + "%";
  document.querySelector("#wind_speed").innerHTML = data.current.wind_kph + " km/h";
  document.querySelector("#pressure").innerHTML = data.current.pressure_mb + "hPa";
  document.querySelector("#uv").innerHTML = Math.round(data.current.uv);

  document.querySelector("#type_of_weather").innerHTML = data.current.condition.text;
  document.querySelector("#type_of_weather_icon").src = data.current.condition.icon;
  document.querySelector("#time").innerHTML = data.location.localtime.slice(11, 16);
  document.querySelector("#day").innerHTML = data.location.localtime.slice(0, 11);

//   if (data.weather[0].main == "Clouds") {
//     weather_icon.src = "img/clouds.png";
//   } else if (data.weather[0].main == "Clear") {
//     weather_icon.src = "img/clear.png";
//   } else if (data.weather[0].main == "Rain") {
//     weather_icon.src = "img/rain.png";
//   } else if (data.weather[0].main == "Drizzle") {
//     weather_icon.src = "img/drizzle.png";
//   } else if (data.weather[0].main == "Mist") {
//     weather_icon.src = "img/mist.png";
//   }
}
search_btn.addEventListener("click", () => {
  checkWeather(search_box.value);
});

checkWeather(city);
