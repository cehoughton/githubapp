var apiKey = require('./../.env').apiKey;


exports.getRepos = function(ghrepo) {
 $.get('https://api.github.com/users/' + ghrepo + '/repos?access_token=' + apiKey).then(function(response) {
   var repos = response;
   console.log(repos);

   for(var i = 0; i < response.length; i++){
      $("#repoName").append("<li>" + response[i].name + "</li><br>");
    }
  //  for(var i = 0; i < response.length; i++)
  //     $("#repoDescription").append("<li>" + response[i].description + "</li><br>"

   $('.showRepo').text("Here is " + ghrepo + " repos" + response.public_repos);
 }).fail(function(error) {
  //  for(var i = 0; i < response.length; i++)
  //     $(".repo").append("<li>" + response[i].name + "</li><br>");
  //  for(var i = 0; i < response.length; i++)
  //     $("#repoDescription").append("<li>" + response[i].description + "</li><br>");


 });
};
