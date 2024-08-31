// Day 25: Project 2 - Movie Search App
// Tasks/Activities:

// Activity 1: Setting Up the Project
// Task 1: Initialize a new project directory and set up the basic HTML structure for the movie search app.

// Task 2: Add a basic CSS file to style the movie search app, including a container for displaying movie search results.

// Activity 2: Fetching Movie Data
// Task 3: Use the fetch API to get movie data from a public movie API (e.g., OMDB API or The Movie Database API). Log the response data to the console.

// Task 4: Parse the movie data and display the movie title, poster, and release year on the web page.

// Activity 3: Adding Search Functionality
// Task 5: Add an input field and a search button to the HTML structure. Style the input and button using CSS.

// Task 6: Write a function to fetch and display movie data based on a search query entered in the input field. Log any errors to the console.

// Activity 4: Displaying Detailed Movie Information
// Task 7: Modify the search results to include a "More Info" button for each movie. When clicked, fetch and display additional details about the movie, such as the plot, director, and actors.

// Task 8: Create a modal or a new section on the page to display the detailed movie information.

// Activity 5: Enhancing the UI
// Task 9: Add CSS styles to improve the layout and design of the search results and detailed movie information.

// Task 10: Add CSS animations or transitions to make the movie search app more interactive and visually appealing.

// Feature Request:
// 1. Movie Data Fetching Script: Write a script that fetches movie data from a public API and displays the title, poster, and release year on the web page.

// 2. Search Functionality Script: Create a script that allows users to search for movies by title and displays the search results.

// 3. Detailed Information Script: Write a script that fetches and displays additional details about a selected movie, such as the plot, director, and actors.

// 4. UI Enhancement Script: Create a script that improves the layout and design of the movie search app with CSS styles and animations.

// Achievement:
// By the end of these activities, you will:
// Set up a basic project structure with HTML and CSS.
// Use the fetch API to retrieve and display movie data from a public API.
// Implement search functionality to fetch and display movie data based on user input.
// Fetch and display detailed information about selected movies.
// Enhance the user interface with CSS styles and animations to make the movie search app more interactive and visually appealing.

document.getElementById("search-button").addEventListener("click", function () {
    const query = document.getElementById("search-input").value;
    fetchMovieData(query);
});

function fetchMovieData(query) {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=c2c7af7d`)
        .then((response) => response.json())
        .then((data) => {
            if (data.Search) {
                displayMovies(data.Search);
            } else {
                alert("Movie not found");
            }
        })
        .catch((error) => console.error("Error:", error));
}

function displayMovies(movies) {
    const movieResults = document.getElementById("movie-results");
    const movieResultsContainer = document.getElementById(
        "movie-results-container"
    );
    movieResultsContainer.style.display = "flex"; // Show the results container
    movieResults.innerHTML = ""; // Clear previous results

    movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `
            <img src="${
                movie.Poster !== "N/A" ? movie.Poster : "no-image.jpg"
            }" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <button class="more-info-btn" onclick="fetchMovieDetail('${
                movie.imdbID
            }')">More Info</button>
        `;
        movieResults.appendChild(movieCard);
    });
}

function fetchMovieDetail(id) {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=c2c7af7d`)
        .then((response) => response.json())
        .then((movie) => {
            displayMovieDetail(movie);
        })
        .catch((error) => console.error("Error:", error));
}

function displayMovieDetail(movie) {
    const movieDetail = document.getElementById("movie-detail");
    const movieDetailContainer = document.getElementById(
        "movie-detail-container"
    );
    movieDetailContainer.style.display = "block"; // Show the detail container
    movieDetail.innerHTML = `
        <h2>${movie.Title} (${movie.Year})</h2>
        <img src="${
            movie.Poster !== "N/A" ? movie.Poster : "no-image.jpg"
        }" alt="${movie.Title}" style="max-width: 200px;">
        <p><strong>Plot:</strong> ${movie.Plot}</p>
        <p><strong>Director:</strong> ${movie.Director}</p>
        <p><strong>Actors:</strong> ${movie.Actors}</p>
    `;
}
