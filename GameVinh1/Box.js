function Box(x, y, w, h) {
  let options = {
    friction: 0.2,
    restitution: 0.8,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  fill(10, 200, 100);
  line(0, height, width, height);
  this.show = function () {
    let pos = this.body.position;
    let { angle } = this.body;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);

    pop();
  };
}
