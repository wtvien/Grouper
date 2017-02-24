//var data = require(./public/data.json);

$(document).ready(function() {
	$('select').change(updatePeerList);	
	$(window).scroll(backToTop);

});

function updatePeerList(e) {
	// Prevent following link
	//e.preventDefault();

	var year = $('#year-sel').val(); 
	var location = $('#location-sel').val();

	$('#peer-list >').hide();
	console.log(year);
	$('#peer-list .' + year + '.' + location).show();
	console.log(year);
};

function backToTop() {

}