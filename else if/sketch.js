var bgColor = '#11B0D9'
function setup() {
    createCanvas(windowWidth, windowHeight)
  
}

function draw() {
  background(bgColor)
  rect(100,100,mouseX,mouseX)
  

 if (mouseX < 1 * windowWidth / 5) {
    bgColor = '#3AD599';
  } else if (mouseX < 2 * windowWidth / 5) {
    bgColor = '#A1280A';
  } else if (mouseX < 3 * windowWidth / 5) {
    bgColor = '#20C8B6';
  } else if (mouseX < 4 * windowWidth / 5) {
    bgColor = '#82BCFB';
  } else {
    bgColor = '#E12874';
  }

}
