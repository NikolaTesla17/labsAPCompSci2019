class button{
    constructor(x,y,text,id){//find where to make paddle
    if(id == 1){
      this.clr = color(255,0,0);//paddle color
    }else if(id == 2){
        this.clr = color(0,255,0);//paddle color
      }else{
        this.clr = color(0,0,255);//paddle color
      }

      this.loc = createVector(x, y);//make paddle

      this.text = text;
    }//end the constructor
    run(){//use this so you dont have to run all of these
      fill(this.clr);//make color
      rect(this.loc.x, this.loc.y, 110, 50);//render paddle to mouse and over at 10
      textSize(30);//make text fit
      fill(255,255,255);//make text color
      text(this.text, this.loc.x, this.loc.y+40);//write you win
    }//end run function
}//end of paddle class