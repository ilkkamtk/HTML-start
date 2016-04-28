
$('#vasen-nav li:first-child').click(function(evt){
    evt.preventDefault();
    $('#vasen-nav li:not(:first)').slideToggle(400);
});
		
