class Ball{//to make new balls easy to add more 
    constructor(x,y,r){ //constructor to start things off and make ball
      this.loc = createVector(x, y);//create a vector for ball's position//create a vector for movment for the ball
      this.clr = r
    }
    run(){//use this so you dont have to run all of these for each ball
      this.render();//draw ball
    }//end run
    render(){//render one frame
      fill(this.clr*2,0,0);//make this color
      ellipse((2*this.clr), 300, 40, 40);//render ball, change if you want other shapes
      background(5,5,5,25);//give slight trail
    }
  }