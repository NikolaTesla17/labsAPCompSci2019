//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  // var cnv = createCanvas(800, 800);
  // cnv.position((windowWidth-width)/2, 30);
  // background(5, 5, 5);
  // fill(200, 30, 150);
  var list = [3,6,10,11,8,2,9,5,1];
  iteration = 0;
  console.log("original: " + list);
sorting = true;
while (sorting == true){
   for (let x=0;x<list.length-1;x++){
      if (list[x] > list[x+1]){
          var temp = list[x];
          list[x] = list[x + 1];
          list[x+1] = temp;
          sorting = true;
          }
   }

   if (sorting == false){
    console.log("me run")
       break;
   }

   sorting = false;
if (sorting == false){
  console.log("sorting now false")
}

   for (let j=list.length-1;j > 0;j--){
           if (list[j-1] > list[j]){
               let temp = list[j];
               list[j] = list[j - 1];
               list[j - 1] = temp;
               sorting = true;
            }
   }
   iteration++;
   console.log("iteration: " + iteration + "\n arrary: " + list);
}

console.log("done: " + list);




}

//  The draw function is called @ 30 fps
function draw() {

}
