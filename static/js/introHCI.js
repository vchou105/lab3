'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(this).text("Please wait...!");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	$("#project1").click(projectClick);
}

function projectClick(e) {
    // prevent the page from reloading
	e.preventDefault();
	// closest() returns the first ancestor of selected element
	var containingProject = $(this).closest(".project");
	// find() finds all descendant elements of selected element
	var description = $(containingProject).find(".project-description");
	$("#project1 img").toggle();
	$(".project-description p").addClass("active");

	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Collaborated with Latinas Contra Cancer to design an itinerary <br>	and website for their virtual walkathon, an annual event to foster more <br>support and awareness in our community.<br><br>A project in Design for America at UCSD where human-centered <br> design is used for social impact.</p></div>");
	} else {
	//	description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
		$(description).fadeToggle();
	}
}

