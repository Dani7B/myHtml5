!(function (exports) {

  console.log('it works!');
  var button = $(#mybutton);

  var saluta = function(event) {
  	alert(Hello Web);
  }

  button.on("click",saluta);

}(this));