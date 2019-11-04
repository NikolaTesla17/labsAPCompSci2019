class snake{
    constructor(){
        this.loc = createVector(400,400)
        this.seg = 1;
        this.segs = 1;
        this.lastx;
        this.lasty;
    }
run(){
    this.change();
    this.render();
    this.segment();
}
change(){
    if (keyIsPressed){
        if (keyCode === LEFT_ARROW) {
            //replace this tomfoolery with an array when you have time
            //declare a new vector every time with the value of the thing in front of it
             var y = this.seg.length;
             this.last = createVector(this.loc.x,this.loc.y);
             this.loc.x=this.loc.x-20;
            console.log("left");
        }
        if (keyCode === RIGHT_ARROW) {
            var y = this.seg.length;
            this.last = createVector(this.loc.x,this.loc.y);
            this.loc.x=this.loc.x+20;
          console.log("right");
        }
        if (keyCode === DOWN_ARROW) {
            var y = this.seg.length;
            this.last = createVector(this.loc.x,this.loc.y);
            this.loc.y=this.loc.y+20;
          console.log("down");
        }
        if (keyCode === UP_ARROW) {
            var y = this.seg.length;
            this.last = createVector(this.loc.x,this.loc.y);
            this.loc.y=this.loc.y-20;
          console.log("up");
        }
    }

}
segment(){
    //segmentation fault, hopefully not
    if(this.loc.x==food.loc.x&&this.loc.y==food.loc.y){
        this.seg++;
        console.log(this.seg);
    }
    // if(this.seg>this.segs){  
    // }
    for(var x=1;x<this.seg;x++){
        fill(255,100,0);//make random color
        rect(this.last.x,this.last.y, 20, 20);
    }
}
render(){
    fill(255,255,0);//make random color
    rectMode(CENTER);//make it so the center moves
    rect(this.loc.x, this.loc.y, 20, 20);//render paddle to mouse and over at 10
}
}