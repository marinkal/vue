const car = (name, model, year, owner, phone, image) => ({name, model, year, owner, phone, image})

let cars = 
    [
        car("Ford", "Focus", "2015", "Max", "+7 912 078 46 81", "images/focus.png"),
        car("Ford", "Mondeo", "2018", "irina", "+7 932 344 32 12", "images/mondeo.png"),
        car("Kia", "Ria", "2016", "Valentina", "+7 902 343 17 18", "images/kia.png"),
        
    ]

new Vue({
    el: "#app",
    data: {
        cars: cars,
        selectedCarIndex: 0,
        car: cars[0],
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectedCar: function(index) {
            this.car = cars[index];
            this.selectedCarIndex = index;
        }
    },
    computed: {
        phoneButtonText(){
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars(){
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            });
        }
    }
});