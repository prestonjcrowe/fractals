var frames = 0;

function setup() {
  createCanvas(windowHeight,windowHeight);
  background(0, 0, 0);
  rectMode(CENTER);
}

function draw() {
  tri(width / 2, height / 2, width);
  frames++;
}

function tri(x, y, size) {
  fill(0);
  //triangle(x, y - size / 2, x - size / 2, y + size/ 2, x + size / 2, y + size / 2);
  sierpinki(width/2, height/2, width, 8);
}

function sierpinki(x, y, size, lvl) {
  if (lvl == 0) {
    
  }

  else {
    stroke(255, 0, 0);
    colorMode(HSB, 100);
    stroke(((y / height * 100) + (frames * 10)) % 100, 50, 50);
    noFill();

    let drawRects = false;
    let drawTris = true;

    if (drawRects) {
      rect(x, y, size, size);
    }

    if (drawTris) {
      // fill(0);
      // stroke(0);
      triangle(x - size * 0.5, y + size/2, x, y + size / 2, x - size * 0.25, y);
      triangle(x + size * 0.5, y + size/2, x, y + size / 2, x + size * 0.25, y);
      triangle(x, y - size/2,  x - size *0.25,  y, x + size * 0.25, y);

      sierpinki(x - size / 4, y + size / 4, size / 2, lvl - 1);
      sierpinki(x + size / 4, y + size / 4, size / 2, lvl - 1);
      sierpinki(x, y - size / 4, size / 2, lvl - 1);
    }
  }  
}
