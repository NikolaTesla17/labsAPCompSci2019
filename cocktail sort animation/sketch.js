//  Nayan Smuek
function setup() {
   var ctx = createCanvas(800, 500);//make canvas
   ctx.position((windowWidth-width)/2, 30);//put canvas in the middle
   background(5, 5, 5);//make black background
   fill(200, 30, 150);
   frameRate(4);

}//end setup



iteration = 0;//to count how long it takes to sort
for(x=0;x<10;x++){
 var bars = [1,2,3,4,5,6,7,8,9,10];
 console.log(bars[2]);
 }


 for(x=0;x<10;x++){
    
    var move = 50*x;
    bars[x] = new bar((100+move),(100+move))
    }
 console.log(bars[2]);
shuf(bars);
console.log(bars);
console.log(bars[2]);

//  The draw function is called @ 30 fps
function draw() {


   for(x=0;x<10;x++){
      bars[x].run();
   }
}

function bars() {
   sorting = true;//you need to sort
while (sorting == true){//if you need to sort then
//possible to draw stuff here
   for (let x=0;x<list.length-1;x++){//while there is things to sort iterate up
      if (list[x] > list[x+1]){//check if a number is to far down
         temp = list[x];//if yes than swap
         list[x] = list[x + 1];//swap numbers
         list[x+1] = temp;//swap numbers
         draw();
         sorting = true;//you still need to sort 
      }//end swap
   }//stop iterating foward

  sorting = false;//no more sorting needed however the rest of the statment still finishes unless the itterate backwards loop sets it back to true because stuff is still out of order

   for (let j=list.length-1;j > 0;j--){//iterate backwards
         if (list[j-1] > list[j]){//if number is to far up
         temp = list[j];//swap
         list[j] = list[j - 1];//swap
         list[j - 1] = temp;//swap
         draw();
      }//end swap
   }//stop iterating backwards

   for (let j=list.length-1;j > 0;j--){//iterate backwards
      if (list[j-1] > list[j]){//if number is to far up
         sorting = true;//sorting still needed
      }//this is needed so the sort dosn't end up doing a whole extra iteration sometimes
   }//stop iterating
   iteration++;//say you did one loop
   console.log("iteration: " + iteration + "\n arrary: " + list);//print out list at iteration to show change

}//if sorting isnt true
console.log("done: " + list);//say finished and print array
}







function shuf(a) {
   var j, x, i;
   for (i = a.length - 1; i > 0; i--) {
       j = Math.floor(Math.random() * (i + 1));
       x = a[i];
       a[i] = a[j];
       a[j] = x;
   }
   console.log(a[2]);
   return a;
}