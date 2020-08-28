var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;
//======================================
var engine;
var world;
var box1,
  boxes = [];
let GROUND;
let GROUNDS = [];
function setup() {
  createCanvas(400, 400);
  engine = Engine.create(); //create engine
  world = engine.world; //create wolrd
  // box1 = Bodies.rectangle(100, 0, 8, 8); //create box
  Engine.run(engine); // run engine
  // World.add(world, box1); //render
  // console.log(box1);
  //box1 = new Box(100, 100, 100, 8);
  let options = {
    isStatic: true,
  };
  GROUNDS.push(new Ground(200, height, width, 10, options));
  GROUNDS.push(new Ground(200, 0, width, 10, options));
  GROUNDS.push(new Ground(0, 200, 10, height, options));
  GROUNDS.push(new Ground(height, 200, 10, height, options));
  GROUND = Bodies.rectangle(200, height, width, 10, options);
  rectMode(CENTER);

  World.add(world, GROUND);
}

function mousePre() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
  console.log(boxes);
}

function draw() {
  background(51);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  for (let i = 0; i < GROUNDS.length; i++) {
    GROUNDS[i].show();
  }
  //box1.show();
  fill(10, 200, 100);
  line(0, height, width, height);
  rect(GROUND.position.x, GROUND.position.y, width, 10);
}
