class Ball{
  constructor(x,y,dx,dy){
    let v1 = createVector(x,y);
    // this.x = x;
    // this.y = y;
    let v2 = createVector(dx,dy);
    // this.dx = dx;
    // this.dy = dy;
    this.clr = color(random(255),random(255),random(255))
  }
  run(){//use this so you dont have to run all of these for each ball
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){//check if touching edge, if so reverse direction
    if(v1.x<0){
      v2.dx = v2.dx*-1;//left
    }
    if(v1.x>width){
      v2.dx = v2.dx*-1;//right
    }
    if(v1.y<0){
      v2.dy = v2.dy*-1;//bottom
    }
    if(v1.y>height){
      v2.dy = v2.dy*-1;//top
    }
  }
  update(){//update location
    v1.x = v1.x + v2.dx;
    v1.y = v1.y + v2.dy;
  }
  render(){//render one frame
    fill(this.clr);
    ellipse(v1.x,v1.y,50,50)
  }
}
