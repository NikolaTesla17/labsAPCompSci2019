
class Ball {
  constructor(x, y, dx, dy, id) {
    this.clr = color(random(255), random(255), random(255));
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.id = id;
    this.acc = createVector(0, .1);
    this.run = function () {
      this.checkEdges();
      this.update();
      this.render();
    };
    this.checkEdges = function () {
      if (this.loc.x < 0) {
        this.vel.x = -this.vel.x; //left
      }
      if (this.loc.x > width) { //right
        this.vel.x = -this.vel.x;
      }
      if (this.loc.y < 0) { //down
        this.vel.y = -this.vel.y;
      }
      if (this.loc.y > height) { //up
        this.vel.y = -this.vel.y;
      }
    };
    this.update = function () {
      this.vel.add(this.acc);
      this.loc.add(this.vel); //add velocity to make gravity
      if (id = -1) {
        var dist = this.loc.dist(mainBall.loc);
        if (dist > 150) {
          this.Force = p5.Vector.sub(mainBall.loc, this.loc);
          this.Force.normalize();
          this.Force.mult(.08);
          this.vel.add(this.Force);
        }
        if (dist < 50) {
          var steeringForce = p5.Vector.sub(this.loc, Atract.loc);
          steeringForce.normalize();
          steeringForce.mult(0.5);
          this.vel.add(steeringForce);
        }
      }
      else {
        this.vel.limit(3);
      }
      this.loc.add(this.vel);
    };
    this.render = function () {
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 11, 11); //render ball, change if you want other shapes
    };
  }
}
