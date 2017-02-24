//var data = require(./public/data.json);

$(document).ready(function() {
<<<<<<< HEAD
	$('select').change(updatePeerList);	
	$(window).scroll(backToTop);

=======
	$('select').change(updatePeerList);
	$('.search-peer').keyup(searchFilter);
>>>>>>> a4fb9392aa3f9fa2d1da0583697466e3ac52435b
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

<<<<<<< HEAD
function backToTop() {

}
=======
function searchFilter(e) {
	var i;
	var names;
	var input = $('.search-peer').val().toUpperCase();

	$('#peer-list > div').each(function() {
		if ($(this).find('.media-heading').html().toUpperCase().indexOf(input) > -1) {
			console.log('if');
			$(this).show();
			console.log(this);
		}
		else {
			console.log('else');
			$(this).hide();
			console.log(this);
		}
	});
};
>>>>>>> a4fb9392aa3f9fa2d1da0583697466e3ac52435b
