$(document).ready(function() {
	$.getJSON("lab8.json",
		function(data) {
			var result = '';
			$.each(data, function (key, value) {
				output += '<ul>';
				output += '<li> <a href="' + value.link + value.link2 + '">' + value.number + ' - ' + value.name+'</a></li>';
				output += '<li>' + value.description + '</li>';
				output += '</ul>';
			});
			$('#laboutput').append(output);
		});	
});

$(function () {
	$('.heading1').animate({height: '60px' }, 1000, 'linear');
});
