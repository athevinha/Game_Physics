function Ground(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h, { isStatic: true });
  this.x = x;
  this.y = y;
  fill(10);
  line(0, height, width, height);
  World.add(world, this.body);
  this.show = function () {
    rect(x, y, w, h);
  };
}
