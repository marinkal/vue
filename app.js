const car = (name, model, year, owner, phone, image) => ({name, model, year, owner, phone, image})

let cars = 
    [
        car("Ford", "Focus", "2015", "Max", "+7 912 078 46 81", "images/focus.png"),
        car("Ford", "Mondeo", "2018", "irina", "+7 932 344 32 12", "images/mondeo.jpg"),
        car("Kia", "Ria", "2016", "Valentina", "+7 902 343 17 18", "images/kia.jpg"),
        
    ]

new Vue({
    el: "#app",
    data: {
        cars: cars
    }
});