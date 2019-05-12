document.addEventListener("DOMContentLoaded", function() {
  var scrollLinks = document.querySelectorAll('[href^="#"]');
  for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", scrollHandler);
  }

  function scrollHandler(event) {
    event.preventDefault();

    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var targetElementId = this.getAttribute("href").split("#")[1];
    var goToPosition = document.getElementById(targetElementId).offsetTop;
    var distance = goToPosition - currentPosition;

    var totalStep = 40;
    var currentStep = 0;
    var intervalTime = 12;

    var scrollby = distance / totalStep;

    var isScrollElementBody = document.scrollingElement && document.scrollingElement.tagName == "BODY";

    var interval = setInterval(function() {
      if (currentStep < totalStep) {
        isScrollElementBody ? (document.body.scrollTop += scrollby) : (document.documentElement.scrollTop += scrollby);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
  }
});

window.onscroll = function(e){
	var scroll = window.scrollY;
	if(scroll > 250){
		console.log('hello');
		document.querySelector('#myNav').classList.add('bg-dark');
		document.querySelector('#myNav').classList.remove('bg-transparent');
	} else {
		document.querySelector('#myNav').classList.remove('bg-dark');
		document.querySelector('#myNav').classList.add('bg-transparent');
	}
}

$('body').scrollspy({ target: '#myNav' });