$(document).ready(function () {
	$.getJSON("lab8.json", 
	// jQuery function to get the JSON file
		function (data) {
		var output = '';
		// variable for an empty string 
		$.each(data, function (key, value) {
		// jQuery function to run for every input of the JSON file
			output += '<ul class="items">';
			output += '<a href="' + value.link + '">' + value.number + ' with ' + value.name+ '</a>';
			output += '<li>' + value.major + '</li>';
            output += '<li>' + ' About the lab: ' + value.description + '</li>';
			output += '</ul>';
			// series of output concatenation to start with a list item, and add the lab number and title, which points to 
			// its link. another list item for the description, and the closing list tag
		});
		$('#laboutput').append(output);
		//jQuery to add the output to the div

	});
});

