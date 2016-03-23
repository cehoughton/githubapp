var apiKey = require('./../.env').apiKey;


exports.getRepos = function(ghrepo) {
 $.get('https://api.github.com/users/' + ghrepo + '?access_token=' + apiKey).then(function(response) {
   console.log(response);
   $('.showRepo').text("Here is" + ghrepo + "repos" + response.public_repos);
 }).fail(function(error) {

 });
};
