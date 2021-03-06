  class Paddle{//****************************************  start Paddle
    constructor(x, y, w, h){
      this.loc = createVector(x, y);
      this.w = w;
      this.h = h;
      this.clr = color(190, 190, 255);
    }

    run(){
      this.update();
      this.render();
    }

    update(){
      this.loc.x = lerp( this.loc.x, mouseX,  .05)
      if(this.loc.x > mainBall.loc.x-50 &&//left
        this.loc.x < mainBall.loc.x +50 &&//right
        this.loc.y+ 15 > mainBall.loc.y &&//bottom
        this.loc.y-10 < mainBall.loc.y){//top
          alert("Game over");
        }
    }


    render(){
       fill(color(0, 0, 255));
       rect(this.loc.x, this.loc.y, this.w, this.h);
    }
  }//  *************************************************  end Paddle class
