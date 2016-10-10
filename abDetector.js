/**
 * ==============
 *   abDetector.js
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
		randomNum = Math.floor(Math.random() * (10000 - 123 + 1)) + 123,
		protocol = window.location.protocol;

	/*
	*
	* Creates a fake iframe, with a fake random url
	* an id and gives it the minimum size
	*
	*/
	iframe.src = protocol +"//google.com/"+ randomNum +"/ads.html";
	iframe.height = ".1px";
	iframe.width = ".1px";
	iframe.id = 'some-ad';

	/*
	*
	* Appends the iframe to the body only if it loaded successfully
	* or the request got aborted due to some error inside the iframe (404)
	*
	*/
	getRequest(iframe, function (response) { // On Success
		document.body.appendChild(iframe);
	}, function (xhr, status) { // On error
		if (status === 0) // Request aborted
	  		document.body.appendChild(iframe);
	});

	/*
	*
	* Takes 500 ms to run the code
	* Selects the iframe from the body
	* Runs some tests to know if it's being hidden or not
	*
	*/
	setTimeout(function() {
		var someAd = document.getElementById('some-ad');
		if(someAd === null ||
		someAd.style.display == "none" ||
		someAd.style.display == "hidden" ||
		someAd.style.visibility == "hidden" ||
		someAd.offsetHeight === 0)
			document.getElementById('ab-message').style.display = 'block';
		else
			someAd.remove();
	}, 500);
};

/*
*
* Uses XmlHttpRequest to load the iframe
* Takes a success and an error function
* and calls them respectively
*
*/
function getRequest (iframe, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", iframe.src);
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4)
			if (xhr.status == 200) // Loaded successfully
				success(xhr.responseText);
			else // For any other error
				error(xhr, xhr.status);
	};
	xhr.send();
}
