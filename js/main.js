$(document).ready(function() {

  var imgs = [
    'img/angery react.gif',
    'img/mic on white.gif',
    'img/mc_ride1.png',
    'img/mc_ride2.png',
    'img/mc_ride3.png'
  ]

  var sounds = [
    'sounds/mc_ride0.wav',
    'sounds/mc_ride1.wav',
    'sounds/mc_ride2.wav',
    'sounds/mc_ride3.wav',
    'sounds/mc_ride4.wav',
    'sounds/mc_ride5.wav',
    'sounds/mc_ride6.wav',
    'sounds/mc_ride7.wav',
    'sounds/mc_ride7.wav',
    'sounds/mc_ride7.wav'
  ]

  var mc_ride = $('#mc-ride');

  $('.tv').on('click', function() {
    console.log('im click');
    var wav_i = Math.floor(Math.random() * sounds.length);
    var audio = new Audio(sounds[wav_i]);
    audio.play();
    console.log('test');
    var img_i = Math.floor(Math.random() * imgs.length);
    mc_ride.attr('src', imgs[img_i]);
    mc_ride.toggleClass('rotate-left');
        setTimeout(function(){
      mc_ride.toggleClass('rotate-left');
      mc_ride.toggleClass('rotate-right');
      setTimeout(function(){
        mc_ride.toggleClass('rotate-right');
        setTimeout(function(){
          mc_ride.attr('src', 'img/mc_ride0.png');
        },1000);
      }, 1000);
    }, 1000);
  });
});
