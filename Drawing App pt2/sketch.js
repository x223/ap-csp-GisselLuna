var strokeColor = 'pink';


function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
  fill('white');
text('1 = ' + 'purple' + " | 2 = " +"Pink " + " | 3 = " + "blue " + " | 4 = " + "green " + " | 5 = "+"yellow"+" | Eraser = " + "press 6", 10, 10);
}

function draw() {
	strokeWeight(10);
	if (mouseIsPressed) {
		stroke(strokeColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

function keyTyped() {
	if (key === '1') {
		strokeColor = '#d9b3ff';
	} else if (key === '2') {
		strokeColor = 'pink';
		weight = 10;
	} else if (key === '3') {
		strokeColor = '#99e6ff';
		weight = 10;
	} else if (key === '4') {
		strokeColor = '#b3ffb3';
		weight = 10;
	} else if (key === '5') {
		strokeColor = '#ffffb3';
	  weight = 10;
} else if (key === '6') {
	strokeColor = 'black';
	weight = 10; 
}
}