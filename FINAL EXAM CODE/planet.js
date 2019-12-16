class Planet {
  constructor(x, y, dx, dy, id) {
    this.clr = color(random(255), random(255), random(255));
    this.loc = createVector(x, y);
    this.id = id

    this.run = function () {
      this.checkEdges();
      this.render();
    }
    this.checkEdges = function () {
      if (this.loc.x < 0) {
        this.vel.x = -this.vel.x*random()*3; //left
      }
      if (this.loc.x > width) { //right
        this.vel.x = -this.vel.x*random()*2;
      }
      if (this.loc.y < 0) { //down
        this.vel.y = -this.vel.y*random()*2;
      }
      if (this.loc.y > height) { //up
        this.vel.y = -this.vel.y*random()*2;
      }

      var dist = this.loc.dist(ships[0].loc);
      if(dist < 120){
        this.loc.x = Math.floor((Math.random() * 700) + 50);
        this.loc.y = Math.floor((Math.random() * 700) + 50);
      }
    }
    this.render = function () {
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }
}
}
