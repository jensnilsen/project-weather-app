const today = ({ city, temp, sunUp, sunSet, icon, specWeatherType }) => `
<article class="todaysWeather">
 
  <div class="todayWea">
    <h1>${city}</h1>
    <h2>${Math.round(temp)} °C</h2>
    <h3>${specWeatherType}</h3>
    <h4>Sunrise: ${sunUp}</h4>
    <h4>Sunset: ${sunSet}</h4>
  </div> 
  <div class="todayImg">
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
  </div>
</article>
`;

const forecast = ({ day, noonTemp, weatherType, icon }) => `
<li class="forecastweather"> 
<p>${day}</p> 
<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
<p>${Math.round(noonTemp)} °C</p>
  
</li>
`;
