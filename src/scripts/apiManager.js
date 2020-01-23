// vvv FETCH CALL vvv //
const getMovies = () => {
    const moviesUrl = 'http://localhost:8088/movies';
    fetch(moviesUrl)
        .then(movies => movies.json())
        .then(moviesFromApi => {
           renderMovies(moviesFromApi);
        });
};