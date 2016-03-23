var apiKey = require('./../.env').apiKey;


exports.getRepos = function(username) {
 $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
   console.log(JSON.stringify(response));
   $('.showRepo').text("Here is" + ghrepo + "repos" + response.public_repos);
 }).fail(function(error) {

 });
};
