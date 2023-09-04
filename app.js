document.addEventListener("DOMContentLoaded", () => {
  let movies = localStorage.getItem("movies") || [];

  if (movies.length != 0) movies = JSON.parse(movies);

  // LIST MOVIES
  const table = document.querySelector("#movie-table");

  if (movies.length > 0) {
    movies.map((movie, index) => {
      let tableRow = document.createElement("tr");

      let tableDataSN = document.createElement("td");
      let tableDataTitle = document.createElement("td");
      let tableDataDirector = document.createElement("td");
      let tableDataYear = document.createElement("td");
      let tableDataGenre = document.createElement("td");

      tableDataSN.innerHTML = `${movies.indexOf(movie) + 1}.`;
      tableDataTitle.innerHTML = movie.title;
      tableDataDirector.innerHTML = movie.director;
      tableDataYear.innerHTML = movie.year;
      tableDataGenre.innerHTML = movie.genre;

      // LINK TO VIEW DETAILS OF THE PARTICULAR MOVIE. CLICK ON THE MOVIE TITLE TO VISIT PAGE
      let movieLink = document.createElement("a");
      movieLink.href = `movie.html?id=${movie.id}`;
      movieLink.append(tableDataTitle);

      tableRow.append(
        tableDataSN,
        movieLink,
        tableDataDirector,
        tableDataYear,
        tableDataGenre
      );

      table.append(tableRow);

      // <i class="fa-solid fa-plus"></i>
      // <i class="fa-solid fa-minus"></i>
      // <i class="fa-solid fa-pen-to-square"></i>
    });
  }
  

  // ADD MOVIE
  let addMovieForm = document.querySelector("#add-movie-form");
  addMovieForm.addEventListener("submit", (e) => {
    // e.preventDefault()

    let movieTitle = document.querySelector("#movie-title").value;
    let movieDirector = document.querySelector("#movie-director").value;
    let movieYear = document.querySelector("#movie-year").value;
    let movieGenre = document.querySelector("#movie-genre").value;
    let movieSummary = document.querySelector("#movie-summary").value;

    let movie = {
      id:`${movieTitle[0]}-${movieDirector[0]}-${movieYear}-${movieGenre[0]}-${Math.floor(Math.random() * (1000 + movies.length))}`,
      title: movieTitle,
      director: movieDirector,
      year: movieYear,
      genre: movieGenre,
      summary: movieSummary,
    };

    movies.push(movie);

    localStorage.setItem("movies", JSON.stringify(movies));

    location.reload();
  });
});