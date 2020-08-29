function Ground(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h, { isStatic: true, angle: PI / 4 });
  this.w = w;
  this.h = h;

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
