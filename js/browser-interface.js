var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;


$(function() {
  $('#repo').submit(function(event) {
    event.preventDefault();
    var ghrepo = $('#username').val();
    $('#username').val("");
    getRepos();
    $('.showRepo').text("Here is" + ghrepo);


  });
});
