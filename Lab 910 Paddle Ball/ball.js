var p = 0;
class Ball{
    constructor(x,y,dx,dy){
      this.loc = createVector(x, y);
      this.vel = createVector(dx, dy);
      this.acc = createVector (0, 0.2);//acceleration vector add
      this.clr = color(random(255),random(255),random(255));
    }
    run(){//use this so you dont have to run all of these for each ball
      this.checkEdges();
      this.update();
      this.render();
      this.paddle();
      this.win();
    }
    checkEdges(){//check if touching edge, if so reverse direction
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
    paddle(){
      var d = mouseY;
      //if(this.loc.x > 30&&(d-50<this.loc.y)||(this.loc.y<d+50)){
        if((this.loc.y>=(d-50)&&(d+50)>=this.loc.y)&&this.loc.x < 31){
        p++;
        console.log("Score is " + p)
        textSize(200);
        fill(255, 255, 255);
        text(p, 400, 400);
        this.vel.x = -this.vel.x;
      }
    }
    update(){//update location
      //this.vel.add(this.acc); //add velocity to make gravity
      this.loc.add(this.vel);
    }
    win(){
      if(p>1){
        background(5,5,255);
        var w = "You Win!";
        textSize(80);
        fill(255, 255, 255);
        text(w, 200, 400);
        throw new Error("won");
      }
    }
    render(){//render one frame
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 10, 10);//render ball, change if you want other shapes
      background(5,5,5,25);
    }
  }