class bar{//to make new bars easy to add more 
    constructor(size,locX,){
        this.height =size;
         this.x = locX;
    }
    run(){
        console.log("it ran");
        fill(255,0,0);//make red
        rectMode(CENTER);
        rect(this.x, 500, 40, this.height);
    }
    }