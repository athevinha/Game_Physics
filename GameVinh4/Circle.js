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
  this.r = r;
  this.crashGround = function () {
    if (this.body.position.y >= height - 40) {
      this.body.restitution = 1;
      return false;
    }
  };
  this.removeFromWorld = function () {
    World.remove(world, this.body);
  };

  this.show = function () {
    let restitutionCir = 1 + (this.N * 4) / 100;
    this.body.restitution = restitutionCir;
    setTimeout(() => {
      this.body.restitution = 1;
      Matter.Body.setDensity(this.body, 5);
    }, 1000);
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
