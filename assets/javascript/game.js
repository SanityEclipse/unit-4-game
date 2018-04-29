function Fighter(name, image, vitality, attack, counter) {
  this.name = name;
  this.image = image;
  this.vitality = vitality;
  this.attack = attack;
  this.counter = counter;
}

$(document).ready(function() {
  console.log("jQuery is ready!")

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

  console.log(newRoster)

  $('.fighters').append(newRoster);

  $("#roster .row .col-md-3 #ryu").on("mouseover", function() {
    var $myImg = $("#roster .row .col-md-3 #ryu").clone();
    $("#playerImage").html($myImg);
  })

  $("#roster .row .col-md-3 #ken").on("mouseover", function() {
    var $myImg = $("#roster .row .col-md-3 #ken").clone();
    $("#playerImage").html($myImg);
  })

  $("#roster .row .col-md-3 #guile").on("mouseover", function() {
    var $myImg = $("#roster .row .col-md-3 #guile").clone();
    $("#playerImage").html($myImg);
  })

  $("#roster .row .col-md-3 #chun-li").on("mouseover", function() {
    var $myImg = $("#roster .row .col-md-3 #chun-li").clone();
    $("#playerImage").html($myImg);
  })




});
