var total_points=0;
var health = 3;
var start_health="three lives";

document.getElementById("points_counter").innerHTML = total_points;
document.getElementById("lives").innerHTML = "<3 <3 <3";

// grab all DIV elements in the document
let object = document.querySelector('#kettlebell');


// helper method to get a multitude of a
// random number as an integer 
const rand = (multi) => {
  return parseInt(multi * Math.random() ,10);
}

// get width and height of the window
let ww = document.getElementById('field').offsetWidth;
let wh = document.getElementById('field').offsetHeight;



// move the dots by changing the CSS values
function move(){

    // x and y position limited to screen space
    let x = rand((ww));
    let y = rand((wh));

    // apply styles
    object.style.top = y + 'px'; 
    object.style.left = x + 'px';

    // 'move' dot with 900ms or more
    object.style.transition = (rand(100)+900) +'ms';


}

document.querySelector('#kettlebell').addEventListener('click', (event) => {
	if (health>0) {
		total_points++;
	}
	
	if (total_points==10) {
		window.location.href = "file:///C:/Users/Owner/Local%20Sites/full_stack_training/CV/final.html";
	};
});


addEventListener('click', (event) => {
	document.getElementById("points_counter").innerHTML = total_points;
});

document.querySelector('#start').addEventListener('click', (event) => {
	window.setInterval(move, 1000);
});


document.querySelector('#field').addEventListener('click', (event) => {
	console.log('test');
	health--;
	switch (health) {
		case 2:
			document.getElementById("lives").innerHTML = "<3 <3";
			break;
		case 1:
			document.getElementById("lives").innerHTML = "<3";
			break;
		case 0:
			document.getElementById("lives").innerHTML = ":(";
			alert("GAME OVER!");
			break;

		default:
			break;
	}

});




