var apiKey = require('./../.env').apiKey;
var getRepoDesc = require('./../js/github.js').getRepoDesc;
var getRepos = require('./../js/github.js').getRepos;

$(function() {
  $('#repo').click(function(event) {
    event.preventDefault();
    var ghrepo = $('#username').val();
    getRepos(ghrepo);
    getRepoDesc(ghrepo);
  });
});
