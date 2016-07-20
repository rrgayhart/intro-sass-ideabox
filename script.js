$(document).ready(function(){

// These three event listeners change the button images when you hover over delete, upvote, and downvote buttons.
// TODO: Refactor these into less code.

	$(".delete-button").hover(function() {
		$(this).attr("src","images/delete-hover.svg");
		}, function() {
		$(this).attr("src","images/delete.svg");
	});

  $(".upvote-button").hover(function() {
    $(this).attr("src","images/upvote-hover.svg");
      }, function() {
    $(this).attr("src","images/upvote.svg");
  });

  $(".downvote-button").hover(function() {
    $(this).attr("src","images/downvote-hover.svg");
      }, function() {
    $(this).attr("src","images/downvote.svg");
  });

});

// Work on constructor for a new Idea
function Idea (title, body) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = 'swill';
}

// Idea.prototype. = ;
// Saving and retrieving ideas

// How do I work with a bunch of ideas?
