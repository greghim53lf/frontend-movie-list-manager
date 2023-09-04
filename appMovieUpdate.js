window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  let movies = localStorage.getItem("movies");
  movies = JSON.parse(movies);

  let movie = movies.find((movie) => movie.id == id);

  // POPULATE INPUT WITH MOVIE DETAILS FOR EDITING
  let movieTitleInput = document.querySelector("#movie-title");
  let movieDirectorInput = document.querySelector("#movie-director");
  let movieYearInput = document.querySelector("#movie-year");
  let movieGenreInput = document.querySelector("#movie-genre");
  let movieSummaryInput = document.querySelector("#movie-summary");

  movieTitleInput.value = movie.title;
  movieDirectorInput.value = movie.director;
  movieYearInput.value = movie.year;
  movieGenreInput.value = movie.genre;
  movieSummaryInput.value = movie.summary;

  //   EDIT AND SAVE CONTROLS
  document.querySelector("#edit-movie-form").addEventListener("submit", (e) => {
    e.preventDefault();

    updatedMovie = {
      id: movie.id,
      title: movieTitleInput.value,
      director: movieDirectorInput.value,
      year: movieYearInput.value,
      genre: movieGenreInput.value,
      summary: movieSummaryInput.value,
    };

    let newMoviesArray = movies.map((movie) => {
      return movie.id === updatedMovie.id ? updatedMovie : movie;
    });

    localStorage.setItem("movies", JSON.stringify(newMoviesArray));

    location.href = `movie.html?id=${movie.id}`
  });
});
