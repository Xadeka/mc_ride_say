$(document).ready(function() {
  $('#btn-mc-ride-say').on('click', function() {
    $('#mc-ride').toggleClass('rotate-left');
    setTimeout(function(){
      $('#mc-ride').toggleClass('rotate-left');
      $('#mc-ride').toggleClass('rotate-right');
      setTimeout(function(){
        $('#mc-ride').toggleClass('rotate-right');
      }, 1000);

    }, 1000);
  });
});