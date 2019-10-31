class food{
    constructor(){
    }
run(){
    this.change();
    this.render();
}
change(){
    this.loc = createVector(random(100, 700),random(100,700))
}
render(){
    fill(255,255,0);//make random color
    rectMode(CENTER);//make it so the center moves
    rect(this.loc.x, this.loc.y, 10, 10);//render paddle to mouse and over at 10
}
}