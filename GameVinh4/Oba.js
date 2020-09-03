function Oba(x, y, w, h, RadomColor) {
  let options = {
    friction: 0.2,
    restitution: 0.8,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  World.add(world, this.body);
  this.w = w;
  this.h = h;
  this.removeFromWorld = function () {
    World.remove(world, this.body);
  };
  this.show = function () {
    let pos = this.body.position;
    let { angle } = this.body.angle;
    push();
    translate(pos.x, pos.y);
    fill(RadomColor[0], RadomColor[1], RadomColor[2]);
    rect(0, 0, this.w, this.h);
    pop();
  };
}
