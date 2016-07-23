//Variables
var $saveButton = $('.save-button');
var $deleteButton = $('.delete-button');
var $upvoteButton = $('.upvote-button');
var $downvoteButton = $('.downvote-button');
var $titleInput = $('.title-input');
var $bodyInput = $('.body-input');
var $ideaList = $('.idea-list');
var $searchInput = $('.search-input')


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
		this.allIdeas.unshift(new Idea(title, body));
		this.store();
	},

	store: function () {
		localStorage.setItem('allIdeas', JSON.stringify(this.allIdeas));
	},

	retrieve: function () {
		var ideasFromStorage = localStorage.getItem('allIdeas') || '[]';
		var ideasAsObjects = JSON.parse(ideasFromStorage);
		this.allIdeas = ideasAsObjects.map(function(obj) {
			return new Idea(obj.title, obj.body, obj.id, obj.quality)
		});
	},

	render: function () {
		$ideaList.html('')
		this.allIdeas.forEach( function (idea) {
			$ideaList.append(
				'<article class="idea-card" data-id=' + idea.id + '>' +
          '<h2 class="idea-title">' + idea.title + '</h2>' +
          '<input type="image" src="images/delete.svg" class="image delete-button">' +
          '<p class="idea-body">' +
            idea.body +
          '</p>' +
          '<div class="quality-container">' +
            '<input type="image" src="images/upvote.svg" class="image upvote-button">' +
            '<input type="image" src="images/downvote.svg"class="image downvote-button">' +
            '<aside class="current-quality"><span>quality: </span>' +
              idea.quality +
            '</aside>' +
          '</div>' +
        '</article>'
			)
		});
	},

	remove: function(id) {
		this.allIdeas = this.allIdeas.filter(function(idea) {
		  return idea.id !== id;
		});
		this.store();
	}
};

//Have save button pull inputs
$saveButton.on('click', function() {
	Ideas.add($titleInput.val(), $bodyInput.val());
	Ideas.render();
	clearInputFields();
});

//Delete button functionality
$ideaList.on('click', '.delete-button', function() {
	var id = $(this).parent().data('id');
	Ideas.remove(id);
	Ideas.render();
})

//Have search input filter results
// $searchInput.on('keyup', Ideas.find());

// TODO: Refactor these into less code.
$(document).ready(function(){

	Ideas.retrieve();
	Ideas.render();


	// These three event listeners change the button images when you hover over delete, upvote, and downvote buttons.

	// $deleteButton.hover(function() {
	// 	Idea.attr("src","images/delete-hover.svg");
	// }, function() {
	// 	Idea.attr("src","images/delete.svg");
	// });
	//
	// $upvoteButton.hover(function() {
	// 	$(this).attr("src","images/upvote-hover.svg");
	// 		}, function() {
	// 	$(this).attr("src","images/upvote.svg");
	// });
	//
	// $downvoteButton.hover(function() {
	// 	$(this).attr("src","images/downvote-hover.svg");
	// 		}, function() {
	// 	$(this).attr("src","images/downvote.svg");
	// });




});
