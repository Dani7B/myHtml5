!(function (exports) {

  var button = $('#mybutton');

  var greets = function(event) {
  	alert("Hello Web");
  }

  button.on('click',greets);

}(this));