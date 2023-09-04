window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log(id);

  let movies = localStorage.getItem("movies");
  movies = JSON.parse(movies);
  console.log(movies);

  let movie = movies.find((movie) => movie.id == id);
  console.log(movie);

  // POPULATE DOM WITH MOVIE DETAILS
  let movieTitleElement = document.querySelector("#movie-title");
  let movieDirectorElement = document.querySelector("#movie-director");
  let movieYearElement = document.querySelector("#movie-year");
  let movieGenreElement = document.querySelector("#movie-genre");
  let movieSummaryElement = document.querySelector("#movie-summary-details");

  movieTitleElement.innerHTML = movie.title;
  movieDirectorElement.innerHTML = `Director: ${movie.director}`;
  movieYearElement.innerHTML = `Year: ${movie.year}`;
  movieGenreElement.innerHTML = `Genre: ${movie.genre}`;
  movieSummaryElement.innerHTML = movie.summary;

//   EDIT AND DELETE CONTROLS
    // EDIT CONTROL
    document.querySelector('#edit-btn').addEventListener("click", () => {
        location.href = `movieUpdate.html?id=${movie.id}`;
    })

    // DELETE CONTROL
    document.querySelector('#delete-btn').addEventListener("click", () => {

        let newMoviesArray = movies.filter(movie => movie.id != id)
        localStorage.setItem('movies', JSON.stringify(newMoviesArray))
        location.href = "movies.html"
    })
    
});
