function Ground(x, y, w, h, angle) {
  console.log(angle);
  if (angle) this.angle = angle;
  let options = {
    isStatic: true,
    angle: this.angle,
    friction: 0,
    restitution: 1,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  this.up = function () {
    this.angle += PI;
    Matter.Body.rotate(this.body, this.angle);
  };
  this.down = function () {
    this.angle -= PI;
    Matter.Body.rotate(this.body, -this.angle);
  };
  World.add(world, this.body);
  this.show = function () {
    let pos = this.body.position;
    let { angle } = this.body;
    push();

    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255, 204, 100);
    //strokeWeight(10);
    //stroke(0);
    rect(0, 0, this.w, this.h);

    pop();
  };
  //fill(255);
}
