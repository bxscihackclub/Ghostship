let ghost;
let spawnEvery = 60;
let score = 0;
let duration = 30;
let startTime;

function setup() {
  createCanvas(480, 360);
  spawnGhost();
  startTime = millis();
}

function draw() {
  background(15, 10, 25);
  noStroke();

  fill(255, 240, 200);
  ellipse(400, 60, 50, 50);

  fill(40, 30, 50);
  rect(0, 300, 480, 60);

  if (frameCount % spawnEvery === 0) spawnGhost();
  drawGhost(ghost.x, ghost.y);

  fill(255);
  textSize(16);
  text('Score: ' + score, 70, 10);

  let elapsed = (millis() - startTime) / 1000;
  let timeLeft = max(0, duration - elapsed);

  textAlign(RIGHT, TOP);
  text('Time: ' + ceil(timeLeft), width - 12, 10);

}

function drawGhost(x, y) {
  noStroke();
  fill(220, 255, 230);
  ellipse(x, y, 60, 60);

  fill(20);
  ellipse(x - 12, y - 5, 10);
  ellipse(x + 12, y - 5, 10);
}

function spawnGhost() {
  ghost = { x: random(40, width - 40), y: random(40, height - 40) };
}

function mousePressed() {
  if (dist(mouseX, mouseY, ghost.x, ghost.y) < 30) {
    score++;
    spawnGhost();
  }
}