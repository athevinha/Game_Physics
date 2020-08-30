function Circle(x, y, r, RadomColor) {
  let options = {
    friction: 0.2,
    restitution: 0.8,
  };
  this.body = Bodies.circle(x, y, r, options);
  World.add(world, this.body);
  this.isOffScreen = function () {};
  fill(10, 200, 100);
  line(0, height, width, height);
  this.show = function () {
    let pos = this.body.position;
    let { angle } = this.body;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(RadomColor[0], RadomColor[1], RadomColor[2]);
    //rectMode(CENTER);
    ellipse(0, 0, r * 2);
    //rect(0, 0, this.w, this.h);

    pop();
  };
}
