class UI {
    constructor() {
        this.city = document.querySelector('.city');
        this.temp = document.querySelector('.temp');
        this.icon = document.querySelector('.icon');
        this.description = document.querySelector('.description');
        this.humidity = document.querySelector('.humidity');
        this.wind = document.querySelector('.wind');
    }

    showWeather(weather) {
        this.city.textContent = `Weather in: ${weather.name}`;
        this.temp.textContent  = `${Math.round(weather.main.temp)}°C`;
        this.icon.setAttribute('href', weather.weather[0].icon);
        this.description.textContent = `Description: ${weather.weather[0].description}`;
        this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed} Km`;

    }

    clearSearch() {
        document.querySelector('.search-bar').value = '';
    }
}