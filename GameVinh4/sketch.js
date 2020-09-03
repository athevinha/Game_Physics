var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;
//======================================
var engine,
  N = 0,
  world,
  box1,
  circles = [],
  GROUND,
  GROUNDS = [],
  Radars,
  mConstranint,
  Obas = [];
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
  let ObaX = 900,
    ObaY = 300;
  Radars = new Ground(200, DirY - 15, 100, 5, PI / 60);
  for (let i = 0; i < 40; i++) {
    let RamdomColor = [];
    RamdomColor.push(Math.floor(Math.random() * 150) + 100);
    RamdomColor.push(Math.floor(Math.random() * 200) + 100);
    RamdomColor.push(Math.floor(Math.random() * 125) + 100);
    Obas.push(new Oba(ObaX, ObaY, 25, 25, RamdomColor));
    ObaX += 25;
    if (i % 5 == 0 && i != 0) ObaX = 900;
  }

  let options = {
    isStatic: true,
    angle: PI / 4,
  };

  //GROUNDS.push(new Ground(200, height, width, 10, PI / 4));
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
  FASTERDIRY = 30,
  LEVEL = 1;

function keyReleased() {
  console.log(key);
  if (key == " ") {
    circles.push(new Circle(POSITION_X + 50, height - 200, 13, [0, 0, 0], N));
    console.log(circles);
  } else if (key == 1) {
    LEVEL = 1;
    endLevel();
    nextLevel1();
  } else if (key == 2) {
    LEVEL = 2;
    endLevel();
    nextLevel2();
  } else if (key == 3) {
    LEVEL = 3;
    endLevel();
    nextLevel3();
  } else if (key == 4) {
    LEVEL = 4;
    endLevel();
    nextLevel4();
  }

  N = 0;
}
function endLevel() {
  for (let i = 0; i < Obas.length; i++) {
    Obas[i].removeFromWorld();
  }
  Obas = [];
  for (let i = 0; i < circles.length; i++) {
    circles[i].removeFromWorld();
  }

  circles = [];
  for (let i = 0; i < GROUNDS.length; i++) {
    GROUNDS[i].removeFromWorld();
  }
  GROUNDS = [];
  GROUNDS.push(new Ground(width / 2, height, width, 20, PI));
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
    // let circleBottom = circles[i].body.position.y + circles[i].r;
    // if (circleBottom > 380) {
    //   circles[i].body.restitution = 0.7;
    // }
    // if (circles[i].IsCrashs(0, 370, 1200, 20)) {
    //   circles[i].body.restitution = 1;
    //   circles[i].removeFromWorld();
    //   circles.splice(i, 1);
    //   i--
    // }
  }
  Radars.show();
  for (let i = 0; i < GROUNDS.length; i++) {
    GROUNDS[i].show();
  }
  for (let i = 0; i < Obas.length; i++) {
    Obas[i].show();
  }
  //box1.show();
  fill(10, 200, 100);
  stroke(100, 150, 100);
  rect(POSITION_X, height - 20, BuckWidth, BuckHeight);

  //.drawingContext.lineWidth = 10;
}
