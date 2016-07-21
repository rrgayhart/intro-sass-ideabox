//Variables
var $saveButton = $('.save-button');
var $deleteButton = $('.delete-button');
var $upvoteButton = $('.upvote-button');
var $downvoteButton = $('.downvote-button');
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');

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

//Object for ideas
var Ideas = {
	allIdeas: [],

	add: function (title, body) {
		// var newIdea = new Idea($titleInput.val(), $bodyInput.val());
		this.allIdeas.push(new Idea(title, body));
		this.store();
	},

	store: function() {
		localStorage.setItem('allIdeas', JSON.stringify(this.allIdeas));
	},

	retrieve: function () {
		var ideasFromStorage = localStorage.getItem('allIdeas') || '[]';
		var ideasAsObjects = JSON.parse(ideasFromStorage);
		this.allIdeas = ideasAsObjects.map(function(obj) {
			return new Idea(obj.title, obj.body, obj.id, obj.quality)
		});
	}
};

// Idea.prototype. = ;
// Saving and retrieving ideas

//Have save button pull inputs
$saveButton.on('click', function() {

	Ideas.add($titleInput.val(), $bodyInput.val());
	clearInputFields();
});

// These three event listeners change the button images when you hover over delete, upvote, and downvote buttons.
// TODO: Refactor these into less code.
$(document).ready(function(){

	//read local storage
	//set ideas > array to value of allIdeas > localStorage

	Ideas.retrieve();

	//render allIdeas to the DOM possibly use .map again?
	//possibly for loop to append the elements





});
