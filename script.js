const cityContainer = document.getElementById("theCity");
const currentTempContainer = document.getElementById("currentTemp");

const apiKey = "6aa09e2ff9fbbd8c9a0b402db6f492f6";

fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&APPID=${apiKey}&units=metric`
)
  .then(response => {
    return response.json();
  })

  .then(json => {
    const weather = template({
      city: json.name,
      temp: json.main.temp,
      sunUp: json.sys.sunrise,
      sunSet: json.sys.sunset,
      icon: json.weather[0].icon,
      weatherType: json.weather[0].main.toLowerCase()
    });

    document.getElementById("todaysWeather").innerHTML = weather;
  });
