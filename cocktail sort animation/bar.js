class bar{//to make new bars easy to add more 
    constructor(size,locX,id){
        this.height =size;
        this.x = locX;
        this.id = id;
    }
    run(){
        this.x = ((50*this.id));

        fill(255,0,0);//make red
        rectMode(CENTER);
        rect(this.x, 500, 40, this.height);
    }
    }