var searchedButton1 = document.getElementById("search-button1");
var weatherButton = document.getElementById("weather-button");
var enteredCity = document.getElementById("entered-city");
var weatherData;


function getWeather() {
    var city = enteredCity.value;
    capCity = city[0].toUpperCase() + city.slice(1);
    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + capCity + '&units=metric&appid=d7d5dab732ecba57b1f82869e14b868c';
    fetch(apiURL).then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                weatherData = data;
             console.log(weatherData);
                displayWeather();           
                return;
            });
        } else {
            alert("Please enter a valid city");
        }
    });
};


// Weather Displayer
function displayWeather() {
    $("#weather-display");
    var desc = weatherData.weather[0].description;
    capDesc = desc[0].toUpperCase() + desc.slice(1);
    var weatherIcon = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';
    $("#city-name").text(weatherData.name + " " + weatherData.sys.country);
    $("#date").text(moment.unix(weatherData.dt).format('MMMM Do YYYY'));
    $("#temp-desc").text(capDesc);
    $("#current-temp").text("Temperature: " + parseInt(weatherData.main.temp) + "°C");
    $("#feels-temp").text("Feels like: " + parseInt(weatherData.main.feels_like) + "°C");
    $("#current-humidity").text("Humidity: " + weatherData.main.humidity + "%");
    $("#current-windspeed").text("Wind Speed: " + parseInt(weatherData.wind.speed * 3.6) + "km/h");
    $("#w-icon").attr("src", weatherIcon).css({"width" : "75px", "height" : "75px"});
   
}

// need this to display * 5 for the 5 days 
// function displayWeather() {
//     $("#weather-display");
//     var desc = weatherData.weather[0].description;
//     capDesc = desc[0].toUpperCase() + desc.slice(1);
//     var weatherIcon = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';
//     $("#city-name").text(weatherData.name + " " + weatherData.sys.country);
//     $("#date").text(moment.unix(weatherData.dt).format('MMMM Do YYYY'));
//     $("#temp-desc").text(capDesc);
//     $("#current-temp").text("Temperature: " + parseInt(weatherData.main.temp) + "°C");
//     $("#feels-temp").text("Feels like: " + parseInt(weatherData.main.feels_like) + "°C");
//     $("#current-humidity").text("Humidity: " + weatherData.main.humidity + "%");
//     $("#current-windspeed").text("Wind Speed: " + parseInt(weatherData.wind.speed * 3.6) + "km/h");
//     $("#w-icon").attr("src", weatherIcon).css({"width" : "75px", "height" : "75px"});
   
// }
// $("#city-name").text(weatherData.name + " " + weatherData.sys.country);
// $("#date").text(moment.unix(weatherData.dt).format('MMMM Do YYYY'));
// $("#temp-desc").text(capDesc);
// $("#current-temp").text("Temperature: " + parseInt(weatherData.main.temp) + "°C");
// $("#feels-temp").text("Feels like: " + parseInt(weatherData.main.feels_like) + "°C");
// $("#current-humidity").text("Humidity: " + weatherData.main.humidity + "%");
// $("#current-windspeed").text("Wind Speed: " + parseInt(weatherData.wind.speed * 3.6) + "km/h");
// $("#w-icon").attr("src", weatherIcon).css({"width" : "75px", "height" : "75px"});

weatherButton.addEventListener("click", getWeather);

// display current date

var todaysDate = moment().format("MMM Do, YYYY");
$("#todaysDate").text(todaysDate);