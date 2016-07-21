//Variables
var $saveButton = $('.save-button');
var $deleteButton = $('.delete-button');
var $upvoteButton = $('.upvote-button');
var $downvoteButton = $('.downvote-button');
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var ideasAll = [];

// Work on constructor for a new Idea
function Idea (title, body, id, quality) {
  this.title = title;
  this.body = body;
  this.id = id || Date.now();
  this.quality = quality || 'swill';
}

function clearInputFields () {
	$titleInput.val("");
	$bodyInput.val("");
}

//Contructor to perform actions on the ideas
var Ideas = {
	addIdea: function(newIdea) {
		ideasAll.push(newIdea);
		localStorage.setItem('ideasAll', JSON.stringify(ideasAll));
	}
}
// Idea.prototype. = ;
// Saving and retrieving ideas

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

	//read local storage
	//set ideas > array to value of ideasAll > localStorage
		var ideasFromStorage = localStorage.getItem('ideasAll') || '[]';
		var ideasAsObjects = JSON.parse(ideasFromStorage);
		ideasAll = ideasAsObjects.map(function(obj) {
			return new Idea(obj.title, obj.body, obj.id, obj.quality)
		});


	//render ideasAll to the DOM possibly use .map again?
	//possibly for loop to append the elements
		// for (var x = 0, x = ideasAll.length(), x++) {
		// 	var storedTitle = document.createElement('h2.idea-title')
		// 	h2[x].appendChild(storedTitle);
		// 	break;
		// }


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
