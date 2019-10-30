class bar{//to make new bars easy to add more 
    constructor(size,locX,id){
        this.height =size;
        this.xl = locX;
        this.id = id;
    }

    run(){
        // this.x = ((50*this.id));

        fill(255,0,0);//make red
        rectMode(CENTER);
        rect(this.xl, 500, 40, this.height);
    }
    }