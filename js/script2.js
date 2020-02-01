$(document).ready(function(){

round = 1;
bigBlind1 = 0;
smallBlind1 = 0;
bigBlind2 = 0;
smallBlind2 = 0;
bigBlind3 = 0;
smallBlind3 = 0;
bigBlind4 = 0;
smallBlind4 = 0;
bigBlind5 = 0;
smallBlind5 = 0;
bigBlind6 = 0;
smallBlind6 = 0;
blindTime1 = 0;
blindTime2 = 0;
blindTime3 = 0;
blindTime4 = 0;
blindTime5 = 0;
blindTime6 = 0;


var minutesLeft = 0;



var number = 1;

function setTimes(){
  if (round == 1){
    $('#currentBlinds').html(`Small: ${smallBlind1} -- Big: ${bigBlind1}`)
    minutesLeft = (blindTime1)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 2){
    $('#currentBlinds').html(`Small: ${smallBlind2} -- Big: ${bigBlind2}`)
    minutesLeft = (blindTime2)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 3){
    $('#currentBlinds').html(`Small: ${smallBlind3} -- Big: ${bigBlind3}`)
    minutesLeft = (blindTime3)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 4){
    $('#currentBlinds').html(`Small: ${smallBlind4} -- Big: ${bigBlind4}`)
    minutesLeft = (blindTime4)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 5){
    $('#currentBlinds').html(`Small: ${smallBlind5} -- Big: ${bigBlind5}`)
    minutesLeft = (blindTime5)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 6){
    $('#currentBlinds').html(`Small: ${smallBlind6} -- Big: ${bigBlind6}`)
    minutesLeft = (blindTime6)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
}
};


function setBlinds(){
  bigBlind1= $('#bigBlind1').val();
  smallBlind1 = $('#smallBlind1').val();
  blindTime1 = $('#blindTime1').val();
  bigBlind2 = $('#bigBlind2').val();
  smallBlind2 = $('#smallBlind2').val();
  blindTime2 = $('#blindTime2').val();
  bigBlind3 = $('#bigBlind3').val();
  smallBlind3 = $('#smallBlind3').val();
  blindTime3 = $('#blindTime3').val();
  bigBlind4 = $('#bigBlind4').val();
  smallBlind4 = $('#smallBlind4').val();
  blindTime4 = $('#blindTime4').val();
  bigBlind5 = $('#bigBlind5').val();
  smallBlind5 = $('#smallBlind5').val();
  blindTime5 = $('#blindTime5').val();
  bigBlind6 = $('#bigBlind6').val();
  smallBlind6 = $('#smallBlind6').val();
  blindTime6 = $('#blindTime6').val();
};

$('#setButton').click(function(){


    secondsLeft = 0;

      $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`);
      setBlinds();
      setTimes();
      console.log(smallBlind5);

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
})


countdown = false;

function updateTime(){
    totalTime = totalTime - 1000;
    minutesRemaining = Math.floor(totalTime / 60000);
    secondsRemaining = Math.floor((totalTime % 60000)/1000);
    $('#timerTime').html(`${minutesRemaining} minutes and ${secondsRemaining} seconds`);
    console.log(countdown)};


$('#startButton').click(function(){



    $('#startButton').fadeOut('slow');
    $('#continue').fadeIn('slow');

    countdown = true;
    console.log(round);
    totalTime = (minutesLeft * 60000) + (secondsLeft * 1000);

    setInterval(function(){
      if (countdown === true) {
        updateTime()}}, 1000);

    setInterval(function(){
      if (totalTime < 1000){
      $('#bell')[0].play();
      round ++;
      countdown = false;
      console.log(countdown);
      setBlinds();
      setTimes();
      totalTime = (minutesLeft * 60000) + (secondsLeft * 1000)}}, 1000);



});


$('#continue').click(function(){
    countdown = true;
})

})
