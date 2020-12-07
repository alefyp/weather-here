import taco from './assets/taco.svg';
import './styles.scss';

const showWeather = (weather) => {
  // grab the UI elements that we need to manipulate
  const section = document.createElement('section');
  const heading = document.createElement('h2');
  const paragraph = document.createElement('p');
};

const getWeather = (lat, lon, apiKey) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`;
  fetch(endpoint).then((res) => res.json()).then((json) => {
    const currentWeather = json;
    showWeather(currentWeather);
  }).catch((err) => err.message);
};

// need to do something with the key for sure
const apiKey = '80a17ddb098409ecacae307f3ad50283';
const geolocationCoordinates = (position) => {
  getWeather(position.coords.latitude, position.coords.longitude, apiKey);
};

const getLocation = () => navigator.geolocation.getCurrentPosition(geolocationCoordinates);

const button = document.getElementById('thebutton');
button.addEventListener('click', () => { getLocation(); });
