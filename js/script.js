!(function (exports) {

  var button = $("#mybutton");

  var saluta = function(event) {
  	alert("Hello Web");
  }

  button.on("click",saluta);

}(this));