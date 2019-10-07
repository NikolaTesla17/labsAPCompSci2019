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
  for(q=0;q<4;q++){//loop to create enough balls
  squares[q] = new square((100+(q*100)),100,1);
  }
  //  create a square object and push it into the squares array

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

}
