!(function (exports) {

  var buttonWhite = $('#button-white'); // seleziona l'id
  var buttonGray = $('#button-gray');
  var containers = $('.container'); // seleziona la classe
  var canvas = $('#paper');
  var context = canvas[0].getContext("2d");


  buttonWhite.on('click',function (event) {
  	containers.removeClass('bg-gray');
  	containers.addClass('bg-white');
  });


  buttonGray.on('click',function (event) { // evento e azione
  	containers.removeClass('bg-white');
  	containers.addClass('bg-gray');
  });

  var drawCircles = function(x, y, raggio) {
  	context.beginPath();
  	context.arc(x,y,raggio,0,2*Math.PI,true);
  	context.stoke(); // fill se vogliamo il cerchio pieno
  };

  canvas.on('mousedown',function (event) {
  	drawCircles(event.offsetX, event.offsetY, 16);
  });

}(this));