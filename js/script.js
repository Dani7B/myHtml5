!(function (exports) {

  var buttonWhite = $('#button-white'); // seleziona l'id
  var buttonGray = $('#button-gray');
  var buttonClear = $('#clear');
  var containers = $('.container'); // seleziona la classe
  var canvas = $('#paper');
  var sliderRadius = $('#slider-radius');
  var monitorRadius = $('#monitor-radius');
  var sliderBgRed = $('#slider-bg-red');
  var sliderBgGreen = $('#slider-bg-green');
  var sliderBgBlue = $('#slider-bg-blue');
  var context = canvas[0].getContext("2d");
  var raggio = 15;
  var bgComponents = [232,232,232];
  var sliderCircleRed = $('#slider-circle-red');
  var sliderCircleGreen = $('#slider-circle-green');
  var sliderCircleBlue = $('#slider-circle-blue');
  var circleComponents = [0,0,0];
  var circles = [];
  var colorMonitor = $('#color-monitor');

  buttonWhite.on('click',function (event) {
  	containers.removeClass('bg-gray');
  	containers.addClass('bg-white');
  });


  buttonGray.on('click',function (event) { // evento e azione
  	containers.removeClass('bg-white');
  	containers.addClass('bg-gray');
  });


  buttonClear.on('click',function (event) { // evento e azione
  	circles = [];
    initCanvas();
    draw();
  });

  var Circle = function (x, y, raggio, colour) {
    this.x = x;
    this.y = y;
    this.raggio = raggio;
    this.colour = colour;
  }

  Circle.prototype.draw = function() {
    context.beginPath();
    context.strokeStyle = this.colour;
  	context.arc(this.x,this.y,this.raggio,0,2*Math.PI,true);
  	context.stroke(); // fill se vogliamo il cerchio pieno
  };


  var initCanvas = function (bgColor) {
    context.clearRect(0, 0, canvas.width(), canvas.height()); // cheat
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width(), canvas.height());
    context.strokeStyle = 'rgb(0,0,0)';
    context.lineWidth = 2;
  };

  var draw = function () {
    initCanvas('rgb(' + bgComponents.join() + ')');
    circles.forEach(function (circle) {
    circle.draw();
    });
  };


  var updateColorMonitor = function () {
    colorMonitor.css({'background-color': 'rgb(' +  circleComponents.join() + ')'})
  };


  canvas.on('mousedown',function (event) {
  	circles.push(new Circle(event.offsetX, event.offsetY, raggio, 'rgb(' +  circleComponents.join() + ')'));
    draw();
  });


  sliderRadius.on('change', function (event) {
    var value = sliderRadius.attr('value');
    raggio = value;
    monitorRadius.text(value);
  });


  sliderBgRed.on('change', function (event) {
    bgComponents[0] = $(this).attr('value');
    draw();
  });

  sliderBgGreen.on('change', function (event) {
    bgComponents[1] = $(this).attr('value');
    draw();
  });

  sliderBgBlue.on('change', function (event) {
    bgComponents[2] = $(this).attr('value');
    draw();
  });


  sliderCircleRed.on('change', function (event) {
    circleComponents[0] = $(this).attr('value');
    updateColorMonitor();
  });

  sliderCircleGreen.on('change', function (event) {
    circleComponents[1] = $(this).attr('value');
    updateColorMonitor();
  });

  sliderCircleBlue.on('change', function (event) {
    circleComponents[2] = $(this).attr('value');
    updateColorMonitor();
  });


  initCanvas('rgb(' +  bgComponents.join() + ')');
  updateColorMonitor('rgb(' + circleComponents.join() + ')');


}(this));