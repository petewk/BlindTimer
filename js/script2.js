$(document).ready(function(){



var minutesLeft = 0;

var round = 1;

var number = 1;

function setTimes(){
    $('#currentBlinds').html(`Small: ${smallblindArray()} -- Big: ${bigblindArray()}`);
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`);

    minutesLeft = blindtimeArray();
};


//$('#currentBlinds').html(`Small: ${smallblindArray()} -- Big: ${bigblindArray()}`)


$('#addButton').click(function(){


  var newLine = '<div class="form-row"><div class="form-group col-md-3"></div><div class="form-group col-md-2"><label for="smalllBlind1">Small blind</label><br><input type="text" name="smallBlind1" class="form-control smallblind" id="smallBlind1" value=""></div><div class="form-group col-md-2"><label for="bigBlind1">Big blind</label><br><input type="text" name="bigBlind1" class="form-control bigblind" id="bigBlind1" value=""></div><div class="form-group col-md-2"><label for="blindTime1">Time (mins)</label><br><input type="text" name="blindTime1" class="form-control blindtime" id="blindTime1" value=""></div></div>';
  $('#lastRow').after(newLine);
});


$('#setButton').click(function(){


    secondsLeft = 0;
      console.log(blindtimeArray());
      $('#startButton').fadeIn('slow');
      setTimes();
      $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`);
      $('.settings').fadeOut('slow');
      $('#bodyContainer').fadeIn('slow');
      bigblindArray();
      smallblindArray();

    //console.log(minutesLeft);

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


countdown = false;

function updateTime(){
    totalTime = totalTime - 1000;
    minutesRemaining = Math.floor(totalTime / 60000);
    secondsRemaining = Math.floor((totalTime % 60000)/1000);
    $('#timerTime').html(`${minutesRemaining} minutes and ${secondsRemaining} seconds`)};
    //console.log(countdown)};


var bellPlays = 0;


function smallblindArray(){

    blindarray = round - 1;
    var i;
    var smallblindValues = $('.smallblind').map(function(){return $(this).val();}).get();
    console.log(smallblindValues[blindarray]);
    return smallblindValues[blindarray];
    //console.log(smallBlinds[blindarray].val());
};


function bigblindArray(){

    blindarray = round - 1;
    var bigblindValues = $('.bigblind').map(function(){return $(this).val();}).get();
    console.log(bigblindValues[blindarray]);
    return bigblindValues[blindarray];

    //console.log(bigBlinds[blindarray].val());
};

function blindtimeArray(){

    blindarray = round - 1;
    var blindtimeValues = $('.blindtime').map(function(){return $(this).val();}).get();
    return blindtimeValues[blindarray];
}




$('#startButton').click(function(){



    $('#startButton').fadeOut('slow');


    countdown = true;
    console.log(round);
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


$('#playButton').click(function(){
    countdown = true;
});

$('#pauseButton').click(function(){
    countdown = false;
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
