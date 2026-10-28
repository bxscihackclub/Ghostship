let ghost = { x: 240, y: 180 };
let score = 0;

function setup() {
  createCanvas(480, 360);
}

function draw() {
  background(15, 10, 25);
  noStroke();
  drawGhost(240, 180);
  drawGhost(100, 80);

  ghost.x += random(-3, 3);
  ghost.y += random(-3, 3);
  drawGhost(ghost.x, ghost.y);

  fill(255, 240, 200);
  ellipse(400, 60, 50, 50);

  fill(40, 30, 50);
  rect(0, 300, 480, 60);

  fill(255);
  textSize(16);
  text('Score: ' + score, 12, 26);
}

function drawGhost(x, y) {
  noStroke();
  fill(220, 255, 230);
  ellipse(x, y, 60, 60);

  fill(20);
  ellipse(x - 12, y - 5, 10);
  ellipse(x + 12, y - 5, 10);
}

function mousePressed() {
  if (dist(mouseX, mouseY, ghost.x, ghost.y) < 30) {
    score++;
    ghost.x = random(60, 420);
    ghost.y = random(60, 300);
  }
}