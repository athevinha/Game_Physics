function Circle(x, y, r, RadomColor, N) {
  let options = {
    friction: 0.2,
    restitution: 0.8,
  };
  this.body = Bodies.circle(x, y, r, options);
  World.add(world, this.body);
  fill(10, 200, 100);
  line(0, height, width, height);
  this.N = N;
  this.shot = function (p) {
    //y=x+p;
    let pos = this.body.position;
    push();
    pos.x = -1 / p;
    pos.y = p;
    translate(pos.x, pos.y);
    console.log(pos.x + " " + pos.y);
    //rect(0, 0, this.w, this.h);

    pop();
  };
  this.crashGround = function () {
    if (this.body.position.y >= height - 20) {
      console.log();
      return true;
    }
  };
  this.removeFromWorld = function () {
    World.remove(world, this.body);
  };
  this.IsCrash = function (OBJX, OBJY, OBJW, OBJH) {
    let pos = this.body.position;
    // console.log(pos.x + " " + pos.y);
    if (pos.x > OBJX - OBJW / 2 && pos.x + r * 2 < OBJX + OBJW) {
      if (pos.y + r * 2 >= height - 30) return true;
    }
  };
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
