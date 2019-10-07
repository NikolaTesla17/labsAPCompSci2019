/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
// Declare squares[] as a global variable


// put setup code here
var squares = [];//to make balls
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares();
  //  traverse array and run each square


  for(var i = 0; i < squares.length; i++){
    squares[i].render();
   }
}



function loadSquares(){
  for(q=0;q<16;q++){//loop to create enough balls
    if (q%2 == 0){
      cl = 1;
    } else {
      cl = 2;
    }
    
    if(q<=8){
      y = 0;
    }
    if(8<q<=16){
      y = 100;
    }

  squares[q] = new square(q*100,y,cl);
  }
  //  create a square object and push it into the squares array

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

}
