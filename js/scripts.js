// backend

function Player (totalScore, tally) {
  this.totalscore = totalScore;
  this.tally = tally;
}
  Player.prototype.rollDie = function() {
    var rollDie = Math.floor((Math.random() * 6) + 1);
    return rollDie
    this.tally = rollDie + this.tally
  };
  // Player.prototype.Tally = function() {
  // }

var playerOne = Player(0, 0)
var playerTwo = Player(0, 0)

//front-end

$(function(){
  $("#roll-button").click(function(event) {
    event.preventDefault();
    var newPlayer = new Player();
    var rollResult = newPlayer.rollDie();
    $("#die").text(rollResult);
// console.log(this.tally);
//   $("#tally").text(this.tally); {
//     var newPlayer = new Player();
//     var tallyResult = this.tally.rollDie();
//       }

    // $("#hold-button").submit(function(event) {
    // event.preventDefault();
    //var depositTally = parseInt($("#tally").val());
    // Player.rollDie(playerOne, tallyResult);
    //     $("#score1").text(playerOne.tally);
    //
    //     $("#tally").val("");
  });
  function blinker() {
  $('.blink').fadeOut(500);
  $('.blink').fadeIn(500);
}
  setInterval(blinker, 1000);

});
