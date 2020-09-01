var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;
//======================================
var engine,
  N = 0;
var world;
var box1,
  circles = [];
let GROUND;
let GROUNDS = [],
  Radars;
let mConstranint;
function setup() {
  var canvas = createCanvas(1200, 400);

  engine = Engine.create(); //create engine
  world = engine.world; //create wolrd
  // box1 = Bodies.rectangle(100, 0, 8, 8); //create box
  Engine.run(engine); // run engine
  //Matter.MouseConstraint.create(engine, {});
  // World.add(world, box1); //render
  // console.log(box1);
  //box1 = new Box(100, 100, 100, 8);

  Radars = new Ground(DirX - 10, DirY - 15, 100, 5, PI / 60);

  let options = {
    isStatic: true,
    angle: PI / 4,
  };

  GROUNDS.push(new Ground(200, height, width, 10, PI / 4));
  // GROUNDS.push(new Ground(200, 0, width, 10, PI / 4));
  // GROUNDS.push(new Ground(0, 100, 10, height, PI / 1.5));
  // GROUNDS.push(new Ground(height, 200, 10, height, PI / 4));
  GROUNDS.push(new Ground(width / 2, height, width, 20, PI));

  rectMode(CENTER);
  var canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  var ops = {
    mouse: canvasMouse,
    body: circles[0],
  };
  mConstranint = MouseConstraint.create(engine, ops);
  setInterval(() => {}, 3000);
  World.add(world, mConstranint);
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
  FASTER = 3,
  BuckWidth = 100,
  BuckHeight = 20,
  POINT = 0;
//=============
let DirX = 300,
  DirY = 400 - 40,
  FASTERDIRX = 20,
  FASTERDIRY = 30;

function keyReleased() {
  if (key == " ") {
    circles.push(new Circle(POSITION_X + 50, height - 200, 13, [0, 0, 0], N));
  }
  N = 0;
}
function draw() {
  // mouseIsPressed = true;
  // mouseButton = RIGHT;
  if (keyIsDown(LEFT_ARROW)) {
    POSITION_X -= FASTER;
    Radars.left(FASTER);
    DirX -= FASTER;

    if (POSITION_X < BuckWidth / 2) {
      POSITION_X = BuckWidth / 2;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (POSITION_X > width - BuckWidth / 2) {
      POSITION_X = width - BuckWidth / 2;
    }
    Radars.right(FASTER);
    POSITION_X += FASTER;
    DirX += FASTER;
  }
  if (keyIsDown(UP_ARROW)) {
    Radars.up();
    //   console.log(Radars.p);
  }
  if (keyIsDown(DOWN_ARROW)) {
    Radars.down();
    //   console.log(Radars.p);
    //   //DirY = Math.sqrt(Math.abs(2 * 2 - ((DirX + 300) ^ 2))) + 200;
  }
  if (keyIsDown(32)) {
    N++;
    N = N > 100 ? 100 : N;
    document.getElementsByClassName("engine")[0].style.width = N + "%";
  }
  background(51);

  for (let i = 0; i < circles.length; i++) {
    circles[i].show();

    // line(
    //   circles[i].body.position.x,
    //   circles[i].body.position.y,
    //   mConstranint.constraint.pointA.x,
    //   mConstranint.constraint.pointA.y
    // );

    if (circles[i].crashGround()) {
      circles[i].removeFromWorld();
      circles.splice(i, 1);
      i--;
    }
    // if (circles[i].IsCrash(POSITION_X, height - 20, BuckWidth, BuckHeight)) {
    //   circles[i].removeFromWorld();
    //   circles.splice(i, 1);
    //   i--;
    // }
  }
  Radars.show();
  for (let i = 0; i < GROUNDS.length; i++) {
    GROUNDS[i].show();
  }
  //box1.show();
  rect(POSITION_X, height - 20, BuckWidth, BuckHeight);
  fill(10, 200, 100);
  stroke(100, 150, 100);

  //.drawingContext.lineWidth = 10;
}
