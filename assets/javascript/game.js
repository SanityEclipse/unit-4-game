$(document).ready(function() {

  function Fighter(name, image, vitality, attack, counter) {
    this.name = name;
    this.image = image;
    this.vitality = vitality;
    this.attack = attack;
    this.counter = counter;
  }

  var playerHasPicked   = false;
  var opponentHasPicked = false;
  var player1up;
  var opponent;

  // Creates Characters, places in an array, renders to DOM

  var p1Ryu    = new Fighter("ryu", "assets/images/ryu.jpg", 100, 10, 10);
  var p1ChunLi = new Fighter("chun-li", "assets/images/chun-li.jpg", 100, 10, 10);
  var p1Guile  = new Fighter("guile", "assets/images/guile.jpg", 100, 10, 10);
  var p1Ken    = new Fighter("ken", "assets/images/ken.jpg", 100, 10, 10);

  var fighterRoster = [p1Ryu, p1ChunLi, p1Guile, p1Ken];

  var newRoster=$()

  for(i = 0; i < fighterRoster.length; i++ ) {
    var createRoster = $("<div class='col-md-3'><img class= '.img-fluid' src=" + fighterRoster[i].image + " id= " + fighterRoster[i].name + " /></div>" )
    newRoster = newRoster.add(createRoster)

  }

  $('.fighters').append(newRoster);

  // Handles larger portrait behaviors when user hovers over a fighter's picture

  $("#roster .row .col-md-3 #ryu").on("mouseover", function() {
    if(playerHasPicked === false) {
      var $myImg = $("#roster .row .col-md-3 #ryu").clone();
      $("#playerImage").html($myImg);
    }
    if(playerHasPicked === true && opponentHasPicked === false) {
      var $cpuImg = $("#roster .row .col-md-3 #ryu").clone();
      $("#cpuImage").html($cpuImg).addClass('flipped');
    }
  });

  $("#roster .row .col-md-3 #chun-li").on("mouseover", function() {
    if(playerHasPicked === false) {
      var $myImg = $("#roster .row .col-md-3 #chun-li").clone();
      $("#playerImage").html($myImg);
    }
    if(playerHasPicked === true && opponentHasPicked === false) {
      var $cpuImg = $("#roster .row .col-md-3 #chun-li").clone();
      $("#cpuImage").html($cpuImg).addClass('flipped');
    }
  });

  $("#roster .row .col-md-3 #guile").on("mouseover", function() {
    if(playerHasPicked === false) {
      var $myImg = $("#roster .row .col-md-3 #guile").clone();
      $("#playerImage").html($myImg);
    }
    if(playerHasPicked === true && opponentHasPicked === false) {
      var $cpuImg = $("#roster .row .col-md-3 #guile").clone();
      $("#cpuImage").html($cpuImg).addClass('flipped');
    }
  });

  $("#roster .row .col-md-3 #ken").on("mouseover", function() {
    if(playerHasPicked === false) {
      var $myImg = $("#roster .row .col-md-3 #ken").clone();
      $("#playerImage").html($myImg);
    }
    if(playerHasPicked === true && opponentHasPicked === false) {
      var $cpuImg = $("#roster .row .col-md-3 #ken").clone();
      $("#cpuImage").html($cpuImg).addClass('flipped');
    }
  });

  // PLAYER SELECT, OPPONENT SELECT, & ANIMATION

  $("#roster .row .col-md-3 #ryu").click(function() {
    if(playerHasPicked === false) {
      playerHasPicked = true;
      $("#roster .row .col-md-3 #ryu").animate({
        bottom: "-=260"
      }, 100, function(){
      });
      player1up = p1Ryu;
    }
    else if(playerHasPicked === true && opponentHasPicked === false) {
      opponentHasPicked = true;
      $("#roster .row .col-md-3 #ryu").animate({
        bottom: "-=260"
      }, 100)
      .animate({
        right: "-=430"
      }, 100, function(){
      });
      opponent = p1Ryu;
      gameLoop();
    }
  });

  $("#roster .row .col-md-3 #chun-li").click(function() {
    if(playerHasPicked == false) {
      playerHasPicked = true;
      $("#roster .row .col-md-3 #chun-li")
      .animate({
        bottom: "-=260"
      }, 100)
      .animate({
        left: "-=141"
      }, 100, function(){
      });
      player1up = p1ChunLi
    }
    else if(playerHasPicked === true && opponentHasPicked === false){
      opponentHasPicked = true;
      $("#roster .row .col-md-3 #chun-li").animate({
        bottom: "-=260"
      }, 100)
      .animate({
        right:"-=290"
      }, 100, function(){
      });
      opponent = p1ChunLi
      gameLoop();
    }
  });

  $("#roster .row .col-md-3 #guile").click(function() {
    if(playerHasPicked == false) {
      playerHasPicked = true;
      $("#roster .row .col-md-3 #guile")
      .animate({
        bottom: "-=260"
      }, 100)
      .animate({
        left: "-=285"
      }, 100, function(){
      });
      player1up = p1Guile;
    }
    else if(playerHasPicked === true && opponentHasPicked === false) {
      opponentHasPicked = true;
      $("#roster .row .col-md-3 #guile").animate({
        bottom: "-=260"
      }, 100)
      .animate({
        right:"-=140px"
      }, 100, function(){

      });
      opponent = p1Guile;
      gameLoop();
    }
  });

  $("#roster .row .col-md-3 #ken").click(function() {
    if(playerHasPicked === false) {
      playerHasPicked = true;
      $("#roster .row .col-md-3 #ken")
      .animate({
        bottom: "-=260"
      }, 100)
      .animate({
        left: "-=430"
      }, 100, function(){
      });
      player1up = p1Ken;
    }
    else if(playerHasPicked === true && opponentHasPicked === false){
      opponentHasPicked = true;
      $("#roster .row .col-md-3 #ken").animate({
        bottom: "-=260"
      }, 100, function(){

      });
      opponent = p1Ken;
      gameLoop();
    }
  });

  function gameLoop() {
    console.log("Game Loop initiated");
    console.log(player1up)
    console.log(opponent)

    function fight() {
      opponent.vitality = opponent.vitality - player1up.attack;
      console.log("Opponent vitality: " + opponent.vitality);
      player1up.vitality = player1up.vitality - opponent.counter;
      console.log("Player 1 vitality: " + player1up.vitality);
      player1up.attack = player1up.attack += 10;
      console.log("Player 1 attack: " + player1up.attack); 
    }

    fight();

  }


});
