function setup() {
  createCanvas(windowHeight,windowHeight);
  rectMode(CENTER);
  frameRate(50);
}

function draw() {
  background(0, 0, 0);
  tri(width / 2, height / 2, width);
}

function tri(x, y, size) {
  sierpinski(width/2, height/2, width, 7);
}

function sierpinski(x, y, size, lvl) {
  if (lvl == 0) {
    
  }

  else {
    stroke(random(255), random(255), random(255));
    noFill();

    //rect(x, y, size, size);

    triangle(x - size * 0.5, y + size/2, x, y + size / 2, x - size * 0.25, y);
    triangle(x + size * 0.5, y + size/2, x, y + size / 2, x + size * 0.25, y);
    triangle(x, y - size/2,  x - size *0.25,  y, x + size * 0.25, y);
    
    sierpinski(x - size / 4, y + size / 4, size / 2, lvl - 1);
    sierpinski(x + size / 4, y + size / 4, size / 2, lvl - 1);
    sierpinski(x, y - size / 4, size / 2, lvl - 1);
  }
  
}

function carpet(x, y, size, lvl) {
  if (lvl == 0) {

  } else {
  }
}

