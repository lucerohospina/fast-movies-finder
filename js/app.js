$(document).ready(function() {
  var $search = $('#search-movie');

  $search.on('submit', function(event) {
    console.log($('#search-movie-title').val());
    var $searchTitle = $('#search-movie-title').val();
    getMovies($searchTitle);
    event.preventDefault();
  });

  function getMovies($searchTitle) {
    console.log($searchTitle);
    axios.get('http://www.omdbapi.com/?s=' + $searchTitle + '&apikey=3a181f1c')
      .then(function(response) {
        console.log(response);
        var movies = response.data.Search;
        var output = '';
        $.each(movies, function(index, movie) {
          console.log(movie.Director);
          console.log(index + ':' + movie);
          output += `
            <img src="${movie.Poster}" alt="poster">
          `;
        });
        $('.movie-poster').html(output);
      }).catch(function(error) {
        console.log(error);
      }); 
  }
});