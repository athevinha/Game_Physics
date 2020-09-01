function Radar(x, y, w, h, options) {
  this.body = Bodies.rectangle(x, y, w, h, options);
  World.add(world, this.body);
  this.w = w;
  this.h = h;
  this.p = this.body.angle;
  this.up = function (p) {
    this.body.angle += p;
    this.p = this.body.angle;
  };
  this.down = function (p) {
    this.body.angle -= p;
    this.p = this.body.angle;
  };
  this.right = function (v) {
    this.body.position.x += v;
  };
  this.left = function (v) {
    this.body.position.x -= v;
  };
  this.show = function () {
    let pos = this.body.position;
    let { angle } = this.body;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(150, 200, 300);
    rectMode(CENTER);

    rect(0, 0, this.w, this.h);

    pop();
  };
}
