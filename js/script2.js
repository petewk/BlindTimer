$(document).ready(function(){


var minutesLeft = 0;

var round = 1;

var number = 1;

function setTimes(){
    $('#currentBlinds').html(`Small: ${smallblindArray()} -- Big: ${bigblindArray()}`);
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`);

    minutesLeft = blindtimeArray();
};


//function here to convert the blind time values to integers, and total them to give the length of the game

function checklength() {
  var gameTime = function(arr){
    return arr.reduce(function(a,b) {
      return (parseInt(a, 10)) + parseInt(b, 10)}, 0)};
  return ((gameTime($('.blindtime').map(function(){return $(this).val();}).get())) * 60000);

};

//on changing the values of the inputs for the blind times, the screen should update to give the total length of the game


$('.blindtime').on("change", ()=> {
  var length = checklength() / 60000;
  var hours = 0;
  var minutes = 0;
  console.log(length);
  if (length > 60){
    var hours = Math.floor(length / 60);
    var minutes = length % 60;
    $('#gameLength').html(`The game will last ${hours} hours and ${minutes} minutes`);
} else {$('#gameLength').html(`The game will last ${length} minutes`)}});


//$('#currentBlinds').html(`Small: ${smallblindArray()} -- Big: ${bigblindArray()}`)


$('#addButton').click(function(){


  var newLine = '<div class="form-row"><div class="form-group col-md-3"></div><div class="form-group col-md-2"><label for="smalllBlind1">Small blind</label><br><input type="text" name="smallBlind1" class="form-control smallblind" id="smallBlind1" value=""></div><div class="form-group col-md-2"><label for="bigBlind1">Big blind</label><br><input type="text" name="bigBlind1" class="form-control bigblind" id="bigBlind1" value=""></div><div class="form-group col-md-2"><label for="blindTime1">Time (mins)</label><br><input type="text" name="blindTime1" class="form-control blindtime" id="blindTime1" value="0"></div></div>';
  $('.form-row').last().after(newLine);
  $('.form-row').last().last().on("change", ()=> {
    var length = checklength() / 60000;
    var hours = 0;
    var minutes = 0;
    console.log(length);
    if (length > 60){
      var hours = Math.floor(length / 60);
      var minutes = length % 60;
      $('#gameLength').html(`The game will last ${hours} hours and ${minutes} minutes`);
  } else {$('#gameLength').html(`The game will last ${length} minutes`)}});
});





$('#setButton').click(function(){


    secondsLeft = 0;
      //console.log(blindtimeArray());
      $('#startButton').fadeIn('slow');
      if (checklength() > 3600000) {
        alert(`Are you sure? This game will last ${(checklength())/60000} minutes. If so, click ok to continue, otherwise please refresh to re-enter the blind lengths`)};
      checklength();
      setTimes();
      $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`);
      $('#blindText').html("The current blinds are:")
      $('#timerText').html("Time until blinds increase:")
      $('.settings').fadeOut('slow');
      $('#bodyContainer').fadeIn('slow');
      bigblindArray();
      smallblindArray();

});

var present = 0;

    $('#settingsButton').click(function() {
      if (present == 0){

      $('.settings').fadeIn('slow');
      $('#bodyContainer').fadeOut('slow');
      present = present + 1
        } else if (present == 1){
        $('.settings').fadeOut('slow');
        $('#bodyContainer').fadeIn('slow');
        present = 0;
}
});


var countdown = false;

function updateTime(){
    totalTime = totalTime - 1000;
    minutesRemaining = Math.floor(totalTime / 60000);
    secondsRemaining = Math.floor((totalTime % 60000)/1000);
    $('#timerTime').html(`${minutesRemaining} minutes and ${secondsRemaining} seconds`)};



var bellPlays = 0;


function smallblindArray(){

    blindarray = round - 1;
    var i;
    var smallblindValues = $('.smallblind').map(function(){return $(this).val();}).get();
    return smallblindValues[blindarray];

};


function bigblindArray(){

    blindarray = round - 1;
    var bigblindValues = $('.bigblind').map(function(){return $(this).val();}).get();
    return bigblindValues[blindarray];

};

function blindtimeArray(){

    blindarray = round - 1;
    var blindtimeValues = $('.blindtime').map(function(){return $(this).val();}).get();
    return blindtimeValues[blindarray];
};


function gameLengthAlert(length){
  if (length > 3600000) {
    alert("Are you sure? This game will last more then 1 hour")
}
}


$('#startButton').click(function(){



    $('#startButton').fadeOut('slow');


    countdown = true;
    ///console.log(round);
    totalTime = (minutesLeft * 60000) + (secondsLeft * 1000);

    $('.playpause').fadeIn('slow');

    setInterval(function(){
      if (countdown === true) {
        updateTime()}}, 1000);

    setInterval(function(){
      if (totalTime < 1000){
      $('#bell')[0].play();
      bellPlays ++;
      //$('#continue').fadeIn('slow');
      //$('.playpause').fadeOut('slow');
      round ++;
      setTimes();
      totalTime = (minutesLeft * 60000) + (secondsLeft * 1000)}}, 1000);


    setInterval(function(){
      if (isNaN(bigblindArray()) == true) {
        $('#bodyContainer').fadeOut('slow');
        $('#endGame').fadeIn('slow');
}
    }, 500);



});



function setTrue(){
  countdown = true;
}

function setFalse(){
  countdown = false;
}

function pausePlay(){
  if (countdown == false){
    setTrue()
    $('#buttonIcon').removeClass('fas fa-play')
    $('#buttonIcon').addClass('fas fa-pause')}
    else {setFalse()
    $('#buttonIcon').removeClass('fas fa-pause')
    $('#buttonIcon').addClass('fas fa-play')}
} ;


$('#playButton').click(function(){
    pausePlay();
    //console.log(countdown);
});




$('#continue').click(function(){
    countdown = true;
    //console.log(round);
    bellPlays = 0;
    $('#continue').fadeOut('slow');
    $('.playpause').fadeIn('slow');
    bigblindArray();
    smallblindArray();
})

});
