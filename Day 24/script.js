// Day 24: Project 1 - Weather App
// Tasks/Activities:


// Activity 1: Setting Up the Project
// Task 1: Initialize a new project directory and set up the basic HTML structure for the weather app.

// Task 2: Add a basic CSS file to style the weather app, including a container for displaying weather information.


// Activity 2: Fetching Weather Data
// Task 3: Use the fetch API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.
let API_KEY = "76895b817620f4105325501b3c92747e";
let data;
async function fetchData(city) {
    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
            throw new Error("City not found");
        }
        data = await response.json();
        updateWeatherData(data);
    } catch (error) {
        alert(error.message);
    }
}

// Task 4: Parse the weather data and display the current temperature, weather condition, and city name on the web page.
let cityInput = document.getElementById("city-input");
let searchButton = document.getElementById("search-btn");
let cityName = document.getElementById("city-name");
let weatherIcon = document.getElementById("weather-icon");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");
let pressure = document.getElementById("pressure");

function updateWeatherData(data) {
    cityName.innerText = `${data.name}`;
    temperature.innerText = `${data.main.temp}°C`;
    description.innerText = `${data.weather[0].description}`;
    humidity.innerText = `${data.main.humidity}%`;
    windSpeed.innerText = `${data.wind.speed} km/h`;
    pressure.innerText = `${data.main.pressure} hPa`;

    let iconClass;
    switch (data.weather[0].main.toLowerCase()) {
        case "clear":
            iconClass = "fas fa-sun";
            break;
        case "clouds":
            iconClass = "fas fa-cloud";
            break;
        case "rain":
        case "drizzle":
            iconClass = "fas fa-cloud-rain";
            break;
        case "snow":
            iconClass = "fas fa-snowflake";
            break;
        case "thunderstorm":
            iconClass = "fas fa-bolt";
            break;
        case "mist":
        case "fog":
            iconClass = "fas fa-smog";
            break;
        default:
            iconClass = "fas fa-cloud-sun";
    }
    weatherIcon.innerHTML = `<i class="${iconClass}"></i>`;
}


// Activity 3: Adding Search Functionality
// Task 5: Add an input field and a search button to the HTML structure. Style the input and button using CSS.

// Task 6: Write a function to fetch and display weather data for a city entered in the search input field. Log any errors to the console.
searchButton.addEventListener("click", () => {
    fetchData(cityInput.value);
    fetchForcast(cityInput.value);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        fetchData(cityInput.value);
        fetchForcast(cityInput.value);
    }
});


// Activity 4: Displaying a 5-Day Forecast
// Task 7: Use the fetch API to get a 5-day weather forecast from the public weather API. Log the response data to the console.
async function fetchForcast(city) {
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    data = await response.json();
    console.log(data);
    const forecastTableBody = document.querySelector("#forecast-table tbody");
    forecastTableBody.innerHTML = "";
    if (data.list.length > 0) {
        document.querySelector(".forecast-container").style.display = "block";
        data.list.forEach((forecast, index) => {
            if (index % 8 === 0) {
                // Each day has 8 data points (3-hour intervals), so take 1 per day
                let date = new Date(forecast.dt_txt);
                let day = date.toLocaleDateString("en-US", { weekday: "long" });
                let temp = `${forecast.main.temp}°C`;
                let condition = forecast.weather[0].description;
                let row = `
                    <tr>
                        <td>${day}</td>
                        <td>${temp}</td>
                        <td>${condition}</td>
                    </tr>
                `;
                forecastTableBody.insertAdjacentHTML("beforeend", row);
            }
        });
    } else {
        document.querySelector(".forecast-container").style.display = "none";
    }
}

// Task 8: Parse the forecast data and display the temperature and weather condition for each day in the forecast on the web page.


// Activity 5: Enhancing the UI
// Task 9: Add icons or images to represent different weather conditions (e.g., sunny, rainy, cloudy) based on the weather data.

// Task 10: Add CSS animations or transitions to make the weather app more interactive and visually appealing.


// Feature Request:
// 1. Weather Data Fetching Script: Write a script that fetches current weather data from a public API and displays the temperature, weather condition, and city name on the web page.
// 2. Search Functionality Script: Create a script that allows users to search for weather information by city name and displays the results.
// 3. 5-Day Forecast Script: Write a script that fetches and displays a 5-day weather forecast on the web page.
// 4. UI Enhancement Script: Create a script that adds icons for different weather conditions and includes CSS animations or transitions for a better user experience.


// Achievement:
// By the end of these activities, you will:
// Set up a basic project structure with HTML and CSS.
// Use the fetch API to retrieve and display weather data from a public API.
// Implement search functionality to fetch weather data for different cities.
// Display a 5-day weather forecast using data from a public API.
// Enhance the user interface with icons and animations to make the weather app more interactive and visually appealing.