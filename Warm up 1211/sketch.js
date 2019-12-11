//  Nayan Smuek
function setup() {
  var list = [];//to be sorted
  var num = 0;

  while(list.length < 11){
      var r = Math.floor(Math.random() * 100) + 1;
      list[num] = r;
      num++
  }
  console.log("here is the list" + list);


for(i = 0;i<list.length;i++){
   curent=list[i];
   var prev;
   for(var prev = i - 1; prev >= 0 && list[prev] > curent; prev--) {
      list[prev+1] = list[prev];
    }
   list[prev+1] = curent;
}//end insetion sort
console.log("sorted: " + list);//say finished and print array
}//end setup


//  The draw function is called @ 30 fps
function draw() {
}