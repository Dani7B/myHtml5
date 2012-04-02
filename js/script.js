!(function (exports) {

  var buttonWhite = $('#button-white'); // seleziona l'id
  var buttonGray = $('#button-gray');
  var containers = $('.container'); // seleziona la classe


  buttonWhite.on('click',function(event) {
  	containers.removeClass('bg-gray');
  	containers.addClass('bg-white');
  });


  buttonGray.on('click',function(event) { // evento e azione
  	containers.removeClass('bg-white');
  	containers.addClass('bg-gray');
  });

}(this));