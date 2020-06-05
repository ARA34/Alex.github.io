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
