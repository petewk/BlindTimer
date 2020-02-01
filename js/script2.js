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
    $('#currentBlinds').html(`Big: ${bigBlind1} - Small: ${smallBlind1}`)
    minutesLeft = (blindTime1)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 2){
    $('#currentBlinds').html(`Big: ${bigBlind2} - Small: ${smallBlind2}`)
    minutesLeft = (blindTime2)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 3){
    $('#currentBlinds').html(`Big: ${bigBlind3} - Small: ${smallBlind3}`)
    minutesLeft = (blindTime3)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 4){
    $('#currentBlinds').html(`Big: ${bigBlind4} - Small: ${smallBlind4}`)
    minutesLeft = (blindTime4)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 5){
    $('#currentBlinds').html(`Big: ${bigBlind5} - Small: ${smallBlind5}`)
    minutesLeft = (blindTime5)
    $('#timerTime').html(`${minutesLeft} minutes and ${secondsLeft} seconds`)
} else if (round == 6){
    $('#currentBlinds').html(`Big: ${bigBlind6} - Small: ${smallBlind6}`)
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

    console.log(minutesLeft);

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

$('#startButton').click(function(){
    //console.log(number);
    //console.log(minutesLeft);
    totalTime = (minutesLeft * 60000) + (secondsLeft * 1000);
    setInterval(function(){
      if (totalTime > 0){
      totalTime = totalTime - 1000}}, 1000);
    setInterval(function(){
    minutesRemaining = Math.floor(totalTime / 60000)}, 1000)
    setInterval(function(){
    secondsRemaining = Math.floor((totalTime % 60000)/1000)}, 1000);
    setInterval(function(){
    $('#timerTime').html(`${minutesRemaining} minutes and ${secondsRemaining} seconds`)
    }, 1000);
    setInterval(function(){
    if (totalTime < 1000){
    round ++;
    setBlinds();
    setTimes();
    totalTime = (minutesLeft * 60000) + (secondsLeft * 1000)}}, 1000);
    //console.log(blindTime4);

});



})
