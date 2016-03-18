// var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;


$(function() {
  $('#repo').click(function() {
    var ghrepo = $('#username').val();
    $('#username').val("");

    // event.preventDefault();
    $.get('https://api.github.com/users/' + ghrepo + '?access_token=' + apiKey).then(function(response) {
      console.log(response);
  });
});
});
