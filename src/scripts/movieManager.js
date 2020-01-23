// vvv DOM FACTORY vvv - template for compiling data for rendering vvv //
const moviesFactory = (movie) => {
    return `
    <section class="movie">
        <div>TITLE: ${movie.title}</div>
        <div>RELEASED: ${movie.releaseDate}</div>
    </section>
    `;
};

// vvv  DOM RENDERER vvv - prints to the DOM vvv //
const renderMovies = (movies) => {
    const movieContainer = document.getElementById("movie-container")
    movies.forEach(movie => {
        const movieHtml = moviesFactory(movie);
        movieContainer.innerHTML += movieHtml
    });
};