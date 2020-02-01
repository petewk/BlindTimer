console.log("hello");


$(document).ready(function(){

  $('#startButton').click(function(){

      var bigBlind = $('#bigBlind').val();
      var smallBlind = $('#smallBlind').val();


      var minutesMS = $('#minutes').val() * 60000;
      var secondsMS = $('#seconds').val() * 1000;
      var totalTimeMS = minutesMS + secondsMS
      setInterval(function(){
        totalTimeMS = totalTimeMS - 1000}, 1000);
      var minutes = Math.floor(totalTimeMS / 60000);
      var seconds = (totalTimeMS % 60000)/ 1000;
      setInterval(function(){
        minutes = Math.floor(totalTimeMS / 60000)}, 1000);
      setInterval(function(){
        seconds = totalTimeMS % 60000/1000}, 1000);
      setInterval(function(){
        if (totalTimeMS > 0) {console.log("Time remaining is ", minutes, " minutes and ", seconds, " seconds")
        } else {console.log("No time left")}}, 1000);

      setInterval(function(){$('#timerTime').html(` ${minutes} minutes and ${seconds} seconds`)}, 1000);
      $('#currentBlinds').html(`Big: ${bigBlind} - Small: ${smallBlind}`);
});

var present = 0;

    $('#settingsButton').click(function() {
      if (present == 0){
      console.log(present);

      $('.settings').fadeIn('slow');
      $('#bodyContainer').fadeOut('slow');
      present = present + 1
      console.log(present)
        } else if (present == 1){
        $('.settings').fadeOut('slow');
        $('#bodyContainer').fadeIn('slow');
        console.log("closing");
        present = 0;
}
})







})
