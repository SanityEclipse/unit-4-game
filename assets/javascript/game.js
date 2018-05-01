$(document).ready(function() {

  function Fighter(name, image, vitality, attack, counter) {
    this.name = name;
    this.image = image;
    this.vitality = vitality;
    this.attack = attack;
    this.counter = counter;
  }

  var wins = 0;
  var playerHasPicked   = false;
  var opponentHasPicked = false;
  var player1up;
  var opponent;

  // Creates Characters, places in an array, renders to DOM

  var p1Ryu    = new Fighter("ryu", "assets/images/ryu.jpg", 120, 10, 10);
  var p1ChunLi = new Fighter("chun-li", "assets/images/chun-li.jpg", 100, 15, 15);
  var p1Guile  = new Fighter("guile", "assets/images/guile.jpg", 150, 7, 7);
  var p1Ken    = new Fighter("ken", "assets/images/ken.jpg", 120, 10, 10);

  var fighterRoster = [p1Ryu, p1ChunLi, p1Guile, p1Ken];

  var newRoster=$()

  for(i = 0; i < fighterRoster.length; i++ ) {
    var createRoster = $("<div id="+fighterRoster[i].name+" class='col-md-3'><img class= '.img-fluid' src=" + fighterRoster[i].image + " /><p class='hitPoints'>HP "+fighterRoster[i].vitality+"</p></div>" )

    newRoster = newRoster.add(createRoster)

  }

  $('.fighters').append(newRoster);

  // Handles larger portrait behaviors when user hovers over a fighter's picture

  $("#roster .row #ryu").on("mouseover", function() {
    if(playerHasPicked === false) {
      var $myImg = $("#roster .row #ryu img").clone();
      $("#playerImage").html($myImg);
    }
    else if(playerHasPicked === true && opponentHasPicked === false) {
      var $cpuImg = $("#roster .row #ryu img").clone();
      $("#cpuImage").html($cpuImg).addClass('flipped');
    }
  });

  $("#roster .row #chun-li").on("mouseover", function() {
    if(playerHasPicked === false) {
      var $myImg = $("#roster .row #chun-li img").clone();
      $("#playerImage").html($myImg);
    }
    if(playerHasPicked === true && opponentHasPicked === false) {
      var $cpuImg = $("#roster .row #chun-li img").clone();
      $("#cpuImage").html($cpuImg).addClass('flipped');
    }
  });

  $("#roster .row #guile").on("mouseover", function() {
    if(playerHasPicked === false) {
      var $myImg = $("#roster .row #guile img").clone();
      $("#playerImage").html($myImg);
    }
    if(playerHasPicked === true && opponentHasPicked === false) {
      var $cpuImg = $("#roster .row #guile img").clone();
      $("#cpuImage").html($cpuImg).addClass('flipped');
    }
  });

  $("#roster .row #ken").on("mouseover", function() {
    if(playerHasPicked === false) {
      var $myImg = $("#roster .row #ken img").clone();
      $("#playerImage").html($myImg);
    }
    if(playerHasPicked === true && opponentHasPicked === false) {
      var $cpuImg = $("#roster .row #ken img").clone();
      $("#cpuImage").html($cpuImg).addClass('flipped');
    }
  });

  // PLAYER SELECT, OPPONENT SELECT, & ANIMATION

  $("#roster .row #ryu").click(function() {
    if(playerHasPicked === false) {
      playerHasPicked = true;
      $("#roster .row #ryu").animate({
        bottom: "-=260"
      }, 100, function(){
      });
      player1up = p1Ryu;
    }
    else if(playerHasPicked === true && opponentHasPicked === false) {
      opponentHasPicked = true;
      $("#roster .row #ryu").animate({
        bottom: "-=260"
      }, 100)
      .animate({
        right: "-=430"
      }, 100, function(){
      });
      opponent = p1Ryu;
    }
  });

  $("#roster .row #chun-li").click(function() {
    if(playerHasPicked == false) {
      playerHasPicked = true;
      $("#roster .row #chun-li")
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
      $("#roster .row #chun-li").animate({
        bottom: "-=260"
      }, 100)
      .animate({
        right:"-=290"
      }, 100, function(){
      });
      opponent = p1ChunLi
    }
  });

  $("#roster .row #guile").click(function() {
    if(playerHasPicked == false) {
      playerHasPicked = true;
      $("#roster .row #guile")
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
      $("#roster .row #guile").animate({
        bottom: "-=260"
      }, 100)
      .animate({
        right:"-=140px"
      }, 100, function(){

      });
      opponent = p1Guile;
    }
  });

  $("#roster .row #ken").click(function() {
    if(playerHasPicked === false) {
      playerHasPicked = true;
      $("#roster .row #ken")
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
      $("#roster .row #ken").animate({
        bottom: "-=260"
      }, 100, function(){

      });
      opponent = p1Ken;
    }
  });

  function fight() {
    opponent.vitality = opponent.vitality - player1up.attack;
    player1up.vitality = player1up.vitality - opponent.counter;
    player1up.attack = player1up.attack += 5;
    $("div #" + player1up.name + " p").html("HP "+ player1up.vitality);
    $("div #" + opponent.name + " p").html("HP "+ opponent.vitality);
    $(".card-body").html(player1up.name + " dealt " + player1up.attack + " damage! <br>"+opponent.name + " dealt " + opponent.attack + " damage!")
  }

  $("#fightButton").on("click", function() {
    fight();
    if(player1up.vitality <= 0){
      alert("Game Over!")
    }
    else if(opponent.vitality <= 0) {
      alert(opponent.name + " is defeated!")
      $("div #" + opponent.name).addClass("defeated");
      opponentHasPicked = false;
      opponent="";
      wins = wins + 1
      if(wins < 3) {
        alert(wins + " Choose next opponent!")
      }
      else {
        alert("you win!")
      }
    }
  })

});
