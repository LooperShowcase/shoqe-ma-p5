function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  let seconds = second();
  let minutes = minute();
  let hours = hour();
  background(38, 70, 83);

  noFill();
  strokeWeight(4);
  translate(width / 2, height / 2);
  rotate(-90);
  // seconds
  stroke(231, 111, 81);
  let secArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secArc);

  // minutes
  stroke(233, 196, 106);
  let minArc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minArc);
  // hours
  stroke(42, 157, 143);
  let hArc = map(hours % 12, 0, 60, 0, 360);
  arc(0, 0, 200, 200, 0, hArc);

  push();
  rotate(secArc);
  stroke(255);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minArc);
  stroke(255);
  line(0, 0, 80, 0);
  pop();

  push();
  rotate(hArc);
  stroke(255);
  line(0, 0, 60, 0);
  pop();

  stroke(38, 70, 83);
  strokeWeight(7);
  point(0, 0);
}
