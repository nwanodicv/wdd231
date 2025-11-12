// select HTML elements in the document
const city = document.querySelector('#city');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const todayWeather = document.querySelector('#today');
const wednesdayWeather = document.querySelector('#Wednesday');
const thursdayWeather = document.querySelector('#Thursday');

// CREATE REQUIRED VARIABLES FOR THE URL
const mykey = "5426e8079d37bd50de547657296799ac";
const mylat = "6.18292775398609";
const mylon = "6.5215134224711795";
const units = "imperial";
const myurl = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${mykey}&units=${units}`;

// ASYNC FUNCTION TO FETCH WEATHER DATA
async function apiFetch() {
  try {
    const response = await fetch(myurl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
};

// CALL THE ASYNC FUNCTION
function displayResults(data) {
  city.innerHTML = data.name;
  weatherIcon.innerHTML = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  captionDesc.innerHTML = data.weather[0].description;
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)} °F`;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);

  todayWeather.innerHTML = `Today: ${data.main.temp.toFixed(0)} °F`;
  wednesdayWeather.innerHTML = `Wednesday: 70 °F`;
  thursdayWeather.innerHTML = `Thursday: 88 °F`;
  console.log('Hello World');
}

apiFetch();