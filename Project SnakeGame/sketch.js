//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  frameRate(8);

  food = new food();
  snake = new snake();
}

var sege = [1,2];
//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
snake.run();
 food.run();
sneke();

}

function sneke(){
  for(var x=1;x<snake.last.length;x++){
    var z = snake.last.length;
    fill(255,100,0);//make random color
    //if(this.seg>1){
    for(var i=0;i<(snake.seg-1);i++){//move make sege
      console.log("here" + snake.last.length);
      console.log(snake.last[1].x);
        sege[i] = new snek(snake.last[z-(snake.seg-1)].x,snake.last[z-(snake.seg-1)].y);
     //rect(this.last[z-(this.seg-1)].x,this.last[z-(this.seg-1)].y, 20, 20);//need a class
    }
}
for(var x=0;x<snake.seg.length;x++){
  sege[x].run();                  //run this once sege works
}
}

