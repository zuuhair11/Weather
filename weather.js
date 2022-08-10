class Weather {
    constructor(city) {
        this.apiKey = '77d2950737c75dcb3648aab64a0ba8ac';

        this.city = city;

    }


    async getWeather() {
        // Fetch the response
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

        // Get the data from the response as a json file
        const data = await response.json();

        // Return the data
        return data
    }

    changeCity(city) {
        this.city = city;
    }


}