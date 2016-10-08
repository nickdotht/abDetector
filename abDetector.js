/**
 * ==============
 *	 abDetector.js
 * ==============
 *
 * @author: Nick Rameau
 * @github: http://github.com/R4meau
 * @twitter: http://twitter.com/R4meau
 * @contact: r4meau@gmail.com
 *
 *
 */
window.onload = function() {
var iframe = document.createElement('iframe'),
	randomDomain = Math.floor(Math.random() * (10000 - 123 + 1)) + 123,
	iframeLoaded = true,
	protocol = window.location.protocol;

iframe.src = protocol +"//"+ randomDomain +".com/ads.html";
iframe.height = ".1px";
iframe.width = ".1px";
iframe.id = 'some-ad';
iframe.onload = function() {iframeLoaded = false;};

document.body.appendChild(iframe);

setTimeout(function() {
	var someAd = document.getElementById('some-ad');
	if(!iframeLoaded ||
	   someAd == null ||
	   someAd.style.display == "none" ||
	   someAd.style.display == "hidden" ||
	   someAd.style.visibility == "hidden" ||
	   someAd.offsetHeight == 0)
    	document.getElementById('ab-message').style.display = 'block';
    someAd.remove();
}, 500);
console.log("test");
};
