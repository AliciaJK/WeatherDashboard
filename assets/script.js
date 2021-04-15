var searchedButton1 = document.getElementById("search-button1");
var weatherButton = document.getElementById("weather-button");
var enteredCity = document.getElementById("entered-city");
var weatherData;
var forecastData;


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
                // displayForecast(city);           
                return;
            });
        } else {
            alert("Please enter a valid city");
        }
    });
    getForecast(city);     
};

//Display entered city value in columns 


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
    //ux index
   
}


// to do: add in colour code for UX index 

weatherButton.addEventListener("click", getWeather);

// display current date

var todaysDate = moment().format("MMM Do, YYYY");
$("#todaysDate").text(todaysDate);

// to do: 
// save search
//columns & cards
//print multiple dates


function getForecast(searchTerm) {
    capCity = searchTerm.toUpperCase() 
    var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + capCity + '&units=metric&appid=d7d5dab732ecba57b1f82869e14b868c';
    fetch(apiURL).then(function (response) {
        if (response.ok){
            response.json().then(function (data) {
                forecastData = data;
             console.log(data);
                displayForecast(searchTerm);           
                return;
            });
        } else {
            alert("Please enter a valid city");
        }
    });
};


//Display entered city value in columns 


// Weather Displayer
function displayForecast() {
    $("#weather-display2");
    var desc = forecastData.weather[0].description;
    capDesc = desc[0].toUpperCase() + desc.slice(1);
    var weatherIcon = 'http://openweathermap.org/img/wn/' + forecastData.weather[0].icon + '@2x.png';
    $("#city-name2").text(forecastData.name + " " + forecastData.sys.country);
    $("#date2").text(moment.unix(forecastData.dt).format('MMMM Do YYYY'));
    $("#temp-desc2").text(capDesc);
    $("#current-temp2").text("Temperature: " + parseInt(forecastData.main.temp) + "°C");
    $("#feels-temp2").text("Feels like: " + parseInt(forecastData.main.feels_like) + "°C");
    $("#current-humidity2").text("Humidity: " + forecastData.main.humidity + "%");
    $("#current-windspeed2").text("Wind Speed: " + parseInt(forecastData.wind.speed * 3.6) + "km/h");
    $("#w-icon").attr("src", weatherIcon).css({"width" : "75px", "height" : "75px"});
    //ux index
   // grab every 8 items (will be every one day) +8 (loop)
   // generate the DOM elements in jquery 
}