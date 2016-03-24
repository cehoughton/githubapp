var apiKey = require('./../.env').apiKey;

exports.getRepos = function(ghrepo) {
 $.get('https://api.github.com/users/' + ghrepo + '/repos?access_token=' + apiKey).then(function(response) {
   console.log(response);
   for(var i = 0; i < response.length; i++)
      $("#repoName").append("<li>" + response[i].name + "</li>");
  }).fail(function(error) {
    console.log(error.responseJSON.message);
 });
};
exports.getRepoDesc = function(ghrepo){
  $.get('https://api.github.com/users/' + ghrepo + '/repos?access_token=' + apiKey).then(function(response) {
    console.log(response);
    for(var i = 0; i < response.length; i++)
      $("#showRepo").append("<li>" + response[i].description + "</li>");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
