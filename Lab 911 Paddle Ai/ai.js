class ai{
    constructor(x,y){//find where to make paddle
      this.loc = createVector(x, y);//make paddle
      this.vel = createVector(0,-2);
      //this.ball = createVector();
      this.clr = color(255,0,0);//(random(255),random(255),random(255));//paddle color
    }//end the constructor
    run(){//use this so you dont have to run all of these for each ball
      fill(this.clr);//make random color
      rectMode(CENTER);//make it so the center moves
    //   let r = random(-50, 50);
    //   let q = (mouseY);
    //   let g = q*(r);
      this.loc.add(this.vel);//move things
      rect(this.loc.x, this.loc.y, 10, 100);//render paddle to mouse and over at 10
      this.checkEdges();
    }//end run function
    checkEdges(){//check if touching edge, if so reverse direction
        if(this.loc.x < 0){//left
          this.vel.x = -this.vel.x;//bounce ball
        }
        if(this.loc.x > width){//right
          this.vel.x = -this.vel.x;//bounce ball
        }
        if(this.loc.y < 0){//down
          this.vel.y = -this.vel.y;//bounce ball
        }
        if(this.loc.y > height){//up
          this.vel.y = -this.vel.y;//bounce ball
        }
      }
}//end the class