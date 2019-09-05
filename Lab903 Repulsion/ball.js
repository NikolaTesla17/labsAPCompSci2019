
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
    }

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
    }
    this.update = function () {
      // this.vel.add(this.acc);

      if (id = -1) {
        var dist = this.loc.dist(mainBall.loc);
        if (dist > 250) {
          this.Force = p5.Vector.add(mainBall.loc, this.loc);
          this.Force.normalize();
          this.Force.mult(5);
          this.vel.add(this.Force);
          this.loc.add(this.vel); //add velocity to make gravity
        }
        if (dist < 150) {
          this.Force = p5.Vector.sub(this.loc, mainBall.loc);
          this.Force.normalize();
          this.Force.mult(5);
          this.vel.add(this.Force);
          this.loc.add(this.vel); //add velocity to make gravity
        }
      }
        this.vel.limit(3);

      // this.loc.add(this.vel);
    }
    this.render = function () {
      fill(this.clr);
      if (this.id>-1){
      ellipse(this.loc.x, this.loc.y, 10, 10); //render ball, change if you want other shapes
    } else{
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }
  }
}
}
