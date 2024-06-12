const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    //   wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

// Function to get weather for multiple cities

const getWeatherForCities = (cities) => {
    cities.forEach((city) => {
      fetch(url + city, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
  
          // Update the table row with the city's weather data
          document.getElementById(`${city.toLowerCase()}-temp`).innerHTML = response.temp;
          document.getElementById(`${city.toLowerCase()}-max_temp`).innerHTML = response.max_temp;
          document.getElementById(`${city.toLowerCase()}-min_temp`).innerHTML = response.min_temp;
          document.getElementById(`${city.toLowerCase()}-feels_like`).innerHTML = response.feels_like;
          document.getElementById(`${city.toLowerCase()}-cloud_pct`).innerHTML = response.cloud_pct;
          document.getElementById(`${city.toLowerCase()}-humidity`).innerHTML = response.humidity;
          document.getElementById(`${city.toLowerCase()}-sunrise`).innerHTML = response.sunrise;
          document.getElementById(`${city.toLowerCase()}-sunset`).innerHTML = response.sunset;
          document.getElementById(`${city.toLowerCase()}-wind_speed`).innerHTML = response.wind_speed;
          document.getElementById(`${city.toLowerCase()}-wind_degrees`).innerHTML = response.wind_degrees;
        })
        .catch((err) => console.error(err));
    });
  };
  
  // List of cities to fetch weather for
  const cities = ["Chennai", "Mumbai", "California", "Lucknow", "Kolkata", "Bangalore"];
  getWeatherForCities(cities);