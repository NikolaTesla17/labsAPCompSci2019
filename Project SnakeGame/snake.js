class snake{
    constructor(){
        this.loc = createVector(400,400)
        this.seg = 1;
        this.segs = 1;
        this.lastx;
        this.lasty;
        this.last = [1,0];

        //let snake = [  {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150},];
        this.y = 0;
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
             this.y++;
             console.log(this.y);
             this.last[this.y] = createVector(this.loc.x,this.loc.y);
             this.loc.x=this.loc.x-20;
            console.log("left");
        }
        if (keyCode === RIGHT_ARROW) {
            this.y++;
            this.last[this.y] = createVector(this.loc.x,this.loc.y);
            this.loc.x=this.loc.x+20;
          console.log("right");
        }
        if (keyCode === DOWN_ARROW) {
            this.y++;
            this.last[this.y] = createVector(this.loc.x,this.loc.y);
            this.loc.y=this.loc.y+20;
          console.log("down");
        }
        if (keyCode === UP_ARROW) {
            this.y++;
            this.last[this.y] = createVector(this.loc.x,this.loc.y);
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
    console.log(this.last.length);
    for(var x=1;x<this.last.length;x++){
        var z = this.last.length;
        fill(255,100,0);//make random color
        if(this.seg>1){
        rect(this.last[z-(this.seg-1)].x,this.last[z-(this.seg-1)].y, 20, 20);
        }
    }




    // for(var x=1;x<this.last.length;x++){
    //     var x = this.last.length;
    //     fill(255,100,0);//make random color
    //     rect(this.last[x-2].x,this.last[x-2].y, 20, 20);
    // }








}
render(){
    fill(255,255,0);//make random color
    rectMode(CENTER);//make it so the center moves
    rect(this.loc.x, this.loc.y, 20, 20);//render paddle to mouse and over at 10
}
}