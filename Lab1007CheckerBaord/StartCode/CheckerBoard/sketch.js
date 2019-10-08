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

var p = squares.length+1;
  for(var i = 1; i < 17; i++){
    squares[i].render();
   }
}



function loadSquares(){
  for(q=1;q<17;q++){//loop to create enough balls
    if (q%2 == 0){
      cl = 1;
    } else {
      cl = 2;
    }
    
    if(q<=9){
      y = 0;
      console.log("0");
      squares[q] = new square(q*100-100,y,cl);   
    } else if(9<=q<17){
        y = 100;
        console.log("100");
        squares[q] = new square(((q-9)*100)-100,y,cl);   
      }
    }


  }
  //  create a square object and push it into the squares array

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

