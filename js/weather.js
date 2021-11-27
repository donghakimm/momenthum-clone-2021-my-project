const API_KEY = "1cf3a05a3d882f708856d1f10ffc82cd";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather-icon");
            const temp = document.querySelector("#weather__column:last-child span:first-child");
            const city = document.querySelector("#weather__column:last-child span:last-child");
            const temparature = String(Math.round(parseInt(data.main.temp)));
            const {icon} = data.weather[0];
            weather.innerHTML = `<img src="img/weather/${icon}.png">`;
            temp.innerText = `${temparature}\xB0`;
            city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Please click 'Allow' for weather information");
}

 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 




