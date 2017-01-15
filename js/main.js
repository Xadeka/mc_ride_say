$(document).ready(function() {

  var img_file_prefix = 'img/mc_ride';
  var img_file_ext = '.png';
  var numOfImgs = 4; //not including default

  var mc_ride = $('#mc-ride');

  mc_ride.on('click', function() {
    var audio = new Audio('sounds/yell.wav');
    audio.play();
    var randImg = Math.floor(Math.random() * (numOfImgs)) + 1;
    mc_ride.attr('src', img_file_prefix + randImg + img_file_ext);
    mc_ride.toggleClass('rotate-left');
        setTimeout(function(){
      mc_ride.toggleClass('rotate-left');
      mc_ride.toggleClass('rotate-right');
      setTimeout(function(){
        mc_ride.toggleClass('rotate-right');
        setTimeout(function(){
          mc_ride.attr('src', img_file_prefix + '0' + img_file_ext);
        },1000);
      }, 1000);
    }, 1000);
  });
});
