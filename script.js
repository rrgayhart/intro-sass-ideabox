//Variables
var $saveButton = $('.save-button');
var $deleteButton = $('.delete-button');
var $upvoteButton = $('.upvote-button');
var $downvoteButton = $('.downvote-button');
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var ideasAll = [];

// Work on constructor for a new Idea
function Idea (title, body) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = 'swill';
}

function clearInputFields () {
	$titleInput.val("");
	$bodyInput.val("");
}

//Contructor to perform actions on the ideas
var Ideas = {
	addIdea: function(newIdea) {
		ideasAll.push(newIdea);
		localStorage.setItem('saveIdea', JSON.stringify(ideasAll));
	}
}
// Idea.prototype. = ;
// Saving and retrieving ideas

// How do I work with a bunch of ideas? ideasAll

//Have save button pull inputs
$saveButton.on('click', function() {
	var newIdea = new Idea($titleInput.val(), $bodyInput.val());
	// ideasAll.push(newIdea);
	// localStorage.setItem('saveIdea', JSON.stringify(ideasAll));
	Ideas.addIdea(newIdea);
	clearInputFields();
});

// These three event listeners change the button images when you hover over delete, upvote, and downvote buttons.
// TODO: Refactor these into less code.
$(document).ready(function(){

	$deleteButton.hover(function() {
		$(this).attr("src","images/delete-hover.svg");
		}, function() {
		$(this).attr("src","images/delete.svg");
	});

   $upvoteButton.hover(function() {
    $(this).attr("src","images/upvote-hover.svg");
      }, function() {
    $(this).attr("src","images/upvote.svg");
  });

  $downvoteButton.hover(function() {
    $(this).attr("src","images/downvote-hover.svg");
      }, function() {
    $(this).attr("src","images/downvote.svg");
  });

});
