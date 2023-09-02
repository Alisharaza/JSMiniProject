const apiKey = "9bf41cf106777cd42628a1454b3997ed";
const temprature = document.getElementById("temprature");
const humidity = document.getElementById("humidity");
const cityName = document.getElementById("city");
const wind = document.getElementById("wind");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const weatherContainer = document.getElementById("weather");
const error = document.getElementById("error");

async function checkWeather(apiURL) {
  try {
    // weatherContainer.style.display = "none";
    const response = await fetch(apiURL + `appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    render(data);
    weatherContainer.style.display = "block";
    error.style.display = "none";
  } catch {
    error.style.display = "block";
    weatherContainer.style.display = "none";
    console.log("city not found");
  }
}

function render(city) {
  const {
    name,
    main: { temp },
    main: { humidity },
    wind: { speed },
  } = city;
  temprature.textContent = `${(temp - 273.15).toFixed(2)}`;
  humidity.textContent = `${humidity}`;
  cityName.textContent = `${name}`;
  wind.textContent = `${speed}`;
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  checkWeather(apiURL);
});
