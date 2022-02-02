function readJSONFromURL(url, callback){
	// read in JSON data from some url and send that data to the callback function (which expects args of status and response)
	var xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
	xhr.responseType = 'json';
	xhr.onload = function() {
		callback(xhr.status, xhr.response);
	};
	xhr.send();	
}

function useJSONData(status, response){
	// my callback function that will send the data to createDivs (unless there is an error)
	if (status == 200){
		createDivs(response)
	} else {
		alert('Received error message: ' + status)
	}
}

function createDivs(data){
	// create a bunch of divs to test that everything works
	console.log(data);
	data.forEach(function(d){
		var elem = document.createElement('div');
		elem.innerText = d.fields.name
		document.body.appendChild(elem);	
	})

}

// call the function (on page load)		
readJSONFromURL('https://scottcoughlin2014.github.io/quest-software-documentation/module.json', useJSONData)