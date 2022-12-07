$(document).ready(function() {
	$.getJSON("lab8.json",
		function(data) {
			var result = '';
			$.each(data, function (key, labs) {
				output += '<ul>';
				output += '<li> <a href="' + labs.link + labs.link2 + '">' + labs.number + ' - ' + labs.name+'</a></li>';
				output += '<li>' + labs.description + '</li>';
				output += '</ul>';
			});
			$('#laboutput').append(output);
		});	
});

$(function () {
	$('.heading1').animate({height: '60px' }, 1000, 'linear');
});
