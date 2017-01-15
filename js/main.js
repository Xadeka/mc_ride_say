$(document).ready(function() {

  var img_file_prefix = 'img/mc_ride';
  var img_file_ext = '.png';

  var mc_ride = $('#mc-ride');

  $('#btn-mc-ride-say').on('click', function() {
    var audio = new Audio('sounds/yell.wav');
    audio.play();
    mc_ride.attr('src', img_file_prefix + '1' + img_file_ext);
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
