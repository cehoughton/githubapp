
var apiKey = require('./../.env').apiKey;


 $(function(){
  $.get('https://api.github.com/users/' + username '/repos?access_token=' + apiKey + '&per_page=100').then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
