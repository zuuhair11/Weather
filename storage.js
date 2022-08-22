class Storage {
    constructor() {
        this.city;

        this.defaulteCity = 'Sale';
    }


    getCity() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaulteCity;

        } else {
            this.city = localStorage.getItem('city');
            
        }
        
        return {
            city: this.city
        }
    }


    setCity(newCity) {
        localStorage.setItem('city', newCity);

    }


}