function Circle(x, y, r, RadomColor, N) {
  let options = {
    friction: 0.2,
    restitution: 1,
  };
  this.body = Bodies.circle(x, y, r, options);
  World.add(world, this.body);
  fill(10, 200, 100);
  line(0, height, width, height);
  this.N = N;

  this.crashGround = function () {
    if (this.body.position.y >= height - 30) {
      this.body.restitution = 1;
      return false;
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
    let restitutionCir = 1 + (this.N * 4) / 100;
    this.body.restitution = restitutionCir;
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
