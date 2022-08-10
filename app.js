// Instantiate a new storage object
const storage = new Storage();
// Get the stored city data
const weatherCity = storage.getCity();
console.log(weatherCity.city)

// Instantiate a new weather object
const weather = new Weather(weatherCity.city);
// If there's no city in local storage it should use Sale as default city


// Instantiate a new ui object
const ui = new UI();

// Get the weather when the DOM got loaded
document.addEventListener('DOMContentLoaded', getWeather);


// Listen for the click to fetch the data from api
const searchButton = document.querySelector('.search-btn');
searchButton.addEventListener('click', () => {
    // Get the city from the input
    const newCity = document.querySelector('.search-bar').value;

    // Change the city
    weather.changeCity(newCity);

    // Set the location in the city storage
    storage.setCity(newCity);

    // Fetch the weather again with new city data
    getWeather();

    // Clear the search
    ui.clearSearch();
});

function getWeather() {
    weather.getWeather()
        .then(data => {
            // Display the data on the ui
            ui.showWeather(data);

        })
        .catch(err =>  {
            console.log(err);
        })
}

