<h1>ideabox</h1>
<h2>Initial functionality includes:</h2>
<p>This project built upon the "linked list" project and added in the functionality of storing data in localStorage & retrieving it using JSON.</p>
<h2>The data model</h2>
<p>An Idea has an id, title, a body, and a quality.</p>
<p>The id should be a unique identifier.</p>
<p>Title and body are free-form strings.</p>
<p>Quality should be one of the follow: “genius”, “plausible”, and “swill.”</p>
<p>By default, the idea’s “quality” should default to the lowest setting (i.e. “swill”).</p>

<h2>Visual components:</h2>
<p>We were given comps from a designer to match during this project. To ensure our comps were usable both on desktop & mobile
we used CSS flexbox to make sure everything was usable on mobile right from the start</p>

<h2>Using localStorage</h2>
<p>Capturing inputs from the DOM, tranlating those into localStorage, and then pulling them out of localStorage using JSON was a challenge.</p>
<p>We approached this in a way where the actual elements on the page need rely on localStorage to function. Our workflow turned into:</p>
<p>1: Capture the inputs as objects</p>
<p>2: Push those objects into localStorage as strings</p>
<p>3: Retrieve that data by parsing it, and turning that data back into objects.</p>
<p>4: Show those objects on the DOM</p>

<p>This method ensures that anything the user does to those objects, from editing to deleting to changing the quality, always persist if they leave and come back to the application.<p>

<p>Our final feature allows the user to search through ideas and find the one they want. We used a regular expression here to tranverse the DOM and easily show the correct information in sleek way.</p>

<h2>Files & Responsibilities</h2>
<p>index.html - a lean file that sets up the structure for the CSS and JS to act on. Ensure that scripts reference both the CSS and JS to have the entire app function.</p>
<p>jquery.js - required to have any of the $ functions to operate. 
<p>reset.css - applies default styles - not necessary but a nice to have when running on older browsers.</p>
<p>script.js - hold the bulk of the functionality. Comments are included in the file to help describe what the functions are doing. Note the 'store' and 'retrieve' methods for storing and pulling data out of localStorage.</p>
<p>styles.css - these were carefully implemented to match the comp provided by someone else. This can be seen (http://frontend.turing.io/projects/ideabox.html).</p>
