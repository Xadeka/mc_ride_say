$(document).ready(function() {

  var img_file_prefix = 'img/mc_ride';
  var img_file_ext = '.png';
  var numOfImgs = 4; //not including default

  var wav_file_prefix = 'sounds/mc_ride';
  var wav_file_ext = '.wav';
  var numOfAudio = 4;

  var mc_ride = $('#mc-ride');

  mc_ride.on('click', function() {
    var rand_wav = Math.floor(Math.random() * (numOfAudio - 0));
    var audio = new Audio(wav_file_prefix + rand_wav + wav_file_ext);
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
