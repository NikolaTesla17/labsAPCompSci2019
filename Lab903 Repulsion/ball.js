function Ball(location, velocity, radius, col){
    this.loc = location;
    this.vel = velocity;
    this.rad = radius;
    this.col = col;
    this.acc = createVector(0, 0.5);
  this.run = function(){//use this so you dont have to run all of these for each ball
      this.checkEdges();
      this.update();
      this.render();
    }
    this.checkEdges = function(){//check if touching edge, if so reverse direction
      if(this.loc.x < 0){
        this.vel.x = -this.vel.x;//left
      }
      if(this.loc.x > width){//right
        this.vel.x = -this.vel.x;
      }
      if(this.loc.y < 0){//down
        this.vel.y = -this.vel.y;
      }
      if(this.loc.y > height){//up
        this.vel.y = -this.vel.y;
      }
    }
    this.update=function(){//update location
      this.vel.add(this.acc);
      this.loc.add(this.vel);//add velocity to make gravity
    }
    this.render = function(){//render one frame
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 10, 10);//render ball, change if you want other shapes
    }
  }