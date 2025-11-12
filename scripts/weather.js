// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// CREATE REQUIRED VARIABLES FOR THE URL
const mykey = "5426e8079d37bd50de547657296799ac";
const mylat = "49.74982198485053";
const mylon = "6.639831294753715";
const units = "imperial";
const myurl = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylon}&appid=${mykey}&units=${units}`;

// ASYNC FUNCTION TO FETCH WEATHER DATA
async function apiFetch() {
  try {
    const response = await fetch(myurl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      // displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
};

// CALL THE ASYNC FUNCTION

function displayResults(data) {
    currentTemp.textContent = `${data.main.temp.toFixed(0)} °F`;
}

apiFetch();

//49.74982198485053, 6.639831294753715