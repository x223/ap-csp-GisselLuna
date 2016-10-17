var strokeColor = 'pink';


function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0);
}

function draw() {
	strokeWeight(10);
	if (mouseIsPressed) {
		stroke(strokeColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

function keyTyped() {
	if (key === 'v') {
		strokeColor = '#d9b3ff';
	} else if (key === 'p') {
		strokeColor = 'pink';
		weight = 10;
	} else if (key === 'a') {
		strokeColor = '#99e6ff';
		weight = 10;
	} else if (key === 'g') {
		strokeColor = '#b3ffb3';
		weight = 10;
	} else if (key === 'y') {
		strokeColor = '#ffffb3';
	  weight = 10;
} else if (key === 'b') {
	strokeColor = 'black';
	weight = 10; 
}
}