//============================================beginning of p5.js projects================================================
//-----------------------------------------------moving circle project---------------------------------------------------
//declared variables
var circleX;
var circleY;
var cricleColor;
var circleSize;
var speed;
var circleexp;

function setup() {
  createCanvas(1000, 400);

  //circle size going up
  circleexp = 1

  //size of circle
  circleSize = 50;

  //color of circle variable
  circleColor = fill(255, 0, 0)

  //X pos of cirlce
  circleX = 0

  //Y pos of circle
  circleY = 0

  //speed of circle 
  speed = 1


}

function draw() {


  //background color
  background(1000);

  //circle size increasing the size of the circle plus circleexp in a loop(contsant)
  circleSize = circleSize + circleexp;

  //these two lines under are the circle movement
  circleY = circleY + speed;
  circleX = circleX + speed;


  //circle
  ellipse(circleX, circleY, circleSize, circleSize);


  // changes the color of the circle when you press the mouse button(hold)
  if (mouseIsPressed) {
    circleColor = fill(0, 0, 255);
  } else {
    circleColor = fill(255, 0, 0);

  }
}

//----------------------------------------------------piet mondrian project----------------------------------------------------------
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(1000);
  
  
  strokeWeight(4)
  fill(255,0,0)
  rect(0,100,50,50)
  
  strokeWeight(4)
  fill(255,0,0)
  rect(100,100,20,50)
  
  strokeWeight(4)
  fill(0,0,128)
  rect(0,0,100,50)
  
  strokeWeight(4)
  fill(0,0,128)
  rect(148,0,50,50)
  
  strokeWeight(4)
  fill(255,255,0)
  rect(100,0,50,100)
  
  strokeWeight(4)
  fill(255,255,0)
  rect(150,100,50,100)
  
  strokeWeight(4)
  fill(0,0,128)
  rect(0,150,100,100)
  
  strokeWeight(4)
  fill(1000)
  rect(100,150,50,50)
  
    
  strokeWeight(4)
  fill(255,0,0)
  rect(0,50,75,50)
  
      
  strokeWeight(4)
  fill(1000)
  rect(50,100,50,50)
  
  strokeWeight(4)
  fill(1000)
  rect(50,100,50,50)
}

//------------------------------------------------simple bounce off wall example---------------------------------------------
var speed
var circleX
var circleY
var r 
var g 
var b



function setup() {
  createCanvas(1000, 400);
  
  speed = 1
  
  circleX = 0
  circleY = 200
  
  r = 280
  g = 120
  b = 0
  
}

function draw() {
  background(1000);
  
  fill(r,g,b)
  ellipse(circleX,circleY,50,50)
  
  circleX = circleX + speed
    
  if (circleX > width) {
    speed = -1
  }
  circleX = circleX + speed
  
  

}
//----------------------------------------------------minecraft sheep herd------------------------------------------------------------ 
function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(1000)
  //minecraft sheep army
  minecraftsheep(50,50)
  minecraftsheep(200,100)
  minecraftsheep(500,175)
  minecraftsheep(700,50)


  
}

//creates minecraft sheep function
function minecraftsheep(x,y) {
  fill(100)
  rect(x,y,100,50);
  rect(x,y + 50,25,50);
  rect(x + 75,y +50,25,50);
  rect(x + 100,y - 25,50,50);
  fill(0)
  rect(x + 125,y - 10,10,10); 
  
}
//-------------------------------------------------draggable circle project--------------------------------------------------------
let bubble = []
function setup() {
  createCanvas(600, 400);
}
function mouseDragged() {
  let r = random(10,50)
  let b = new Bubble(mouseX,mouseY, r)
  bubble.push(b);
}
function draw() {
  background(0);
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].move();
    bubble[i].show();
  }
}
