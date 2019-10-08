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
  for(var i = 0; i < squares.length; i++){
    squares[i].render();
   }
}

function loadSquares(){
  for(q=0;q<26;q++){//loop to create enough balls
    if (q%2 == 0){
      cl = 1;
    } else {
      cl = 2;
    }
    

    switch (q){
      case(2<q<4): console.log("done");
      break;
    }


    if(q<=8){
      console.log("0");
      squares[q] = new square(q*100,0,cl);   
    } 
    else if(9<=q<17){
        console.log("100");
        squares[q] = new square(((q-9)*100),100,cl);   
      }
      else if(17<=q<25){
        console.log("200");
        squares[q] = new square(((q-18)*100),200,cl);   
      }
    }


  }
  //  create a square object and push it into the squares array

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

