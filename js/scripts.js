// backend logic
var pongGame = [];
var pingpong = function(n){
  for (var i = 1; i <= n; i++){
  if (i % 15 === 0){
    pongGame.push("Ping-Pong");
  }
  else if (i % 5 === 0){
    pongGame.push("Pong");
  }
  else if (i % 3 === 0){
    pongGame.push("Ping");
  }
  else{
    pongGame.push('' + i + '');
  }
  }
};
// front end logic
$(document).ready(function() {
  $("form#Ping-pong").submit(function(event){
    var n = $("input#userInput").val();
    pingpong(n);
    $("#result").show();
    $("#resultNumber").append(pongGame.join(' '));

  $("#statement").show();
  event.preventDefault();

});
});
