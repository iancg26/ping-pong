// backend logic
var pongGame = [];
var pingpong = function(n){
  for (var i = 0; i <= n; i++){
  if (i % 3 === 0){
    pongGame.push("Ping");
  }
  else if (i % 5 === 0){
    pongGame.push("Pong");
  }

  else if (i % 15 === 0){
    pongGame.push("Ping Pong");
  }
  else{
    pongGame.push('' + i + '');
  }
  }
};




// front end logic
$(document).ready(function() {
  $("form#Ping-pong").submit(function(event){




  $("#statement").show();
  event.preventDefault();

};
};
