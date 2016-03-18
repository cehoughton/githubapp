// var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;


$(function() {
  $('#repo').click(function() {
    var ghrepo = $('#username').val();
    $('#username').val("");
    $('.showRepo').text("Here is" + ghrepo  ".");
    event.preventDefault();
    $.get('https://api.github.com/users/' + ghrepo + '?access_token=' + apiKey).then(function(response) {
        $('.showRepo').text("Here is" + ghrepo + "repos" + response.public_repos);
  });
});
});
