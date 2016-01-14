console.log("hello world");

var blobs = []; // array of objects

function setup() {
    var myCanvas = createCanvas(800,250);
    //link to id mySketch from header tag
    myCanvas.parent('mySketch');
    for (var i=0; i<100; i++) { //create 100 blobs
    blobs.push(new Jitter());
  }
}

function draw() {
    // background(255);
    for (var i=0; i<blobs.length; i++) {
        blobs[i].move();
        blobs[i].display();
    }
}

// Jitter class
function Jitter() {
  this.x = random(width); //place at random x location
  this.y = random(height); //place at random y location
  this.diameter = random(5,40); //give blobs a diameter that's within the scale 5-40
  this.speed = .5; //jitter speed

    // jitter back and forth
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

    // display shapes
  this.display = function() {
      stroke(60,179,113);
      ellipse(this.x, this.y, this.diameter, this.diameter);
      stroke(116,116,116);
      ellipse(mouseX, mouseY, 20, 20);
      
  };
}
