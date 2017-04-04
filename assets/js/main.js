$(document).ready(function() {

  // Click Top Menu
$(".toggle_menu").click(function() {
	if ($(".top_menu").is(":visible")) {
		$(".top_menu").fadeOut(600);
	} else {
		$(".top_menu").fadeIn(600);
	}
});

$(".top_menu ul a").click(function() {
	$(".top_menu").fadeOut(600);
	$(".sandwich").toggleClass("active");
}).append("<span>");
// Top Menu End

$(".toggle_menu").click(function() {
  $(".sandwich").toggleClass("active");
});

});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// All others
$(document).ready(function() {
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});
