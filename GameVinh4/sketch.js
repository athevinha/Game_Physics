var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;
//======================================
var engine,
  N = 0;
var world;
var box1,
  circles = [];
let GROUND;
let GROUNDS = [];

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create(); //create engine
  world = engine.world; //create wolrd
  // box1 = Bodies.rectangle(100, 0, 8, 8); //create box
  Engine.run(engine); // run engine
  //Matter.MouseConstraint.create(engine, {});
  // World.add(world, box1); //render
  // console.log(box1);
  //box1 = new Box(100, 100, 100, 8);
  let options = {
    isStatic: true,
    angle: PI / 4,
  };

  // GROUNDS.push(new Ground(200, height, width, 10, PI / 4));
  // GROUNDS.push(new Ground(200, 0, width, 10, PI / 4));
  // GROUNDS.push(new Ground(0, 100, 10, height, PI / 1.5));
  // GROUNDS.push(new Ground(height, 200, 10, height, PI / 4));
  GROUNDS.push(new Ground(width / 2, height, width, 20, PI));
  rectMode(CENTER);
}

// function mousePressed() {
//   let RadomColor1 = Math.floor(Math.random() * 200);
//   let RadomColor2 = Math.floor(Math.random() * 200);
//   let RadomColor3 = Math.floor(Math.random() * 200);
//   circles.push(
//     new Circle(mouseX, mouseY, 13, [RadomColor1, RadomColor2, RadomColor3])
//   );
//   console.log(circles);
// }

let a = 0,
  POSITION_X = 200,
  FASTER = 8,
  BuckWidth = 100,
  BuckHeight = 20,
  POINT = 0;
//=============
let DirX = 300,
  DirY = 400 - 40,
  FASTERDIR = 2;

function keyReleased() {
  if (key == " ") {
    circles.push(new Circle(DirX, DirY, 13, [255, 255, 255]));
  }
  N = 0;
}
function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    POSITION_X -= FASTER;
    DirX -= FASTER;
    if (POSITION_X < BuckWidth / 2) {
      POSITION_X = BuckWidth / 2;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (POSITION_X > width - BuckWidth / 2) {
      POSITION_X = width - BuckWidth / 2;
    }
    POSITION_X += FASTER;
    DirX += FASTER;
  }
  if (keyIsDown(UP_ARROW)) {
    DirY -= FASTERDIR;
    DirX -= FASTERDIR;
  }
  if (keyIsDown(DOWN_ARROW)) {
    DirY += FASTERDIR;
    DirX += FASTERDIR;
  }
  if (keyIsDown(32)) {
    N++;
    N = N > 100 ? 100 : N;
  }
  background(51);

  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
    circles[i].shot();
    // if (circles[i].IsCrash(POSITION_X, height - 20, BuckWidth, BuckHeight)) {
    //   circles[i].removeFromWorld();
    //   circles.splice(i, 1);
    //   i--;
    // }
  }

  for (let i = 0; i < GROUNDS.length; i++) {
    GROUNDS[i].show();
  }
  //box1.show();
  rect(POSITION_X, height - 20, BuckWidth, BuckHeight);
  fill(10, 200, 100);
  stroke(100, 150, 100);
  line(POSITION_X + BuckWidth / 2, height - 30, DirX, DirY);
  //.drawingContext.lineWidth = 10;
}
