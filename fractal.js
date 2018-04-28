function setup() {

}
g
function draw() {
  createCanvas(windowHeight,windowHeight);
  background(29, 27, 28);
  rectMode(CENTER);
  tri(width / 2, height / 2, width);
}

function tri(x, y, size) {
  fill(255);
  //triangle(x, y - size / 2, x - size / 2, y + size/ 2, x + size / 2, y + size / 2);
  sierpinki(width/2, height/2, width, 10);
}

function sierpinki(x, y, size, lvl) {
  if (lvl == 0) {
    
  }

  else {
    stroke(255, 0, 0);
    // change color here
    stroke(random(255), random(255), random(255));
    noFill();
    rect(x, y, size, size);

    // dont draw triangles, only "hitboxes"
    /*
    fill(0);
    stroke(0);
    triangle(x - size * 0.5, y + size/2, x, y + size / 2, x - size * 0.25, y);
    triangle(x + size * 0.5, y + size/2, x, y + size / 2, x + size * 0.25, y);
    triangle(x, y - size/2,  x - size *0.25,  y, x + size * 0.25, y);
    */
    sierpinki(x - size / 4, y + size / 4, size / 2, lvl - 1);
    sierpinki(x + size / 4, y + size / 4, size / 2, lvl - 1);
    sierpinki(x, y - size / 4, size / 2, lvl - 1);
  }
  
}

function carpet(x, y, size, lvl) {
  if (lvl == 0) {

  } else {
  }
}

