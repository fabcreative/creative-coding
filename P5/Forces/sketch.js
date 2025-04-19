let bodyA;
let bodyB;

let G = 1;

function setup() {
  createCanvas(innerWidth, innerHeight);
  bodyA = new Body(innerWidth/2, innerHeight/2);
  bodyB = new Body(innerWidth/2, innerHeight/2-200);
  bodyA.velocity = createVector(1, 0);
  bodyB.velocity = createVector(-1, 0);
}

function draw() {
  background(0);

  bodyA.attract(bodyB);
  bodyB.attract(bodyA);

  bodyA.update();
  bodyA.show();
  bodyB.update();
  bodyB.show();
}