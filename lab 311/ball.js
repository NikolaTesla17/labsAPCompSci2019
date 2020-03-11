//  First Constructor Function
// eettlin
// March 10, 2020

  class Ball{//to make new balls easy to add more 
    constructor(x,y,dx,dy,id){ //constructor to start things off and make ball
      this.loc = createVector(x, y);//create a vector for ball's position
      this.vel = createVector(dx, dy);//create a vector for movment for the ball
      this.acc = createVector (0, 0.2);//for gravty
      this.id = id;
    }
    run(){//use this so you dont have to run all of these for each ball
      this.checkEdges();//bounce ball
      this.update();//move ball
      this.render();//draw ball
      this.remove();//check if the ball hit the paddle
    }//end run
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
    remove(){
      for (var i = balls.length-1; i >= 0; i--){//incriment through all the balls backwards to check if you need to remove them
        if (balls[i].isColliding()&&(this.id%2 == 0)&&(this.vel.y>0)){//if the ball in the loop is colliding
          balls.splice(i, 1);//remove it
          }
          else if(balls[i].isColliding()&&this.vel.y<1&&this.id%2 != 0){//if the ball is colliding with the back of the paddle
          balls.splice(i, 1);
        }
      }
    }
      isColliding(){//check if ball is hitting the paddle
        if(this.loc.x > paddle.loc.x-50 &&//left
        this.loc.x < paddle.loc.x +50 &&//right
        this.loc.y+ 15 > paddle.loc.y &&//bottom
        this.loc.y-10 < paddle.loc.y){//top
          return true;//say yes it is colliding
      }
    }
    update(){//update location
      this.vel.add(this.acc);//gravitay
      this.loc.add(this.vel);//move things
    }
    render(){//render one frame
      if(this.id < 0){
        fill(0,0,255)
      }else if(this.id%2 === 0){
         fill(0,255,0)//green
       }else{
         fill(255,0,0)
       }
       if(this.id > 0){
      ellipse(this.loc.x, this.loc.y, 20, 20);//render ball, change if you want other shapes
       }
       if(this.id == -1){
        ellipse(this.loc.x, this.loc.y, 60, 60)
       }
    }
  }