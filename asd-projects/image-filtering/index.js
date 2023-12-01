// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify);
applyFilterNoBackground(decreaseBlue);
applyFilterNoBackground(increaseGreenByBlue);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for(let i = 0; i < image.length; i++) {
    for(let z = 0; z < image[i].length; z++){
   var rgbString = image[i][z];
   var rgbNumbers = rgbStringToArray(rgbString);
   filterFunction(rgbNumbers);
  // rgbNumbers[0] = 255
   var newRgbString = rgbArrayToString(rgbNumbers)
   image[i][z]=newRgbString
  }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
var backgroundColor = image[0][0]

for (var i = 0; i < image.length; i++){
  for (var j = 0; j < image[i].length; j++){
    
    if (image[i][j] !== backgroundColor) {
      console.log('hello')
      var rgbString = image[i][j];
   var rgbNumbers = rgbStringToArray(rgbString);
   filterFunction(rgbNumbers);
  // rgbNumbers[0] = 255
   var newRgbString = rgbArrayToString(rgbNumbers)
   image[i][j]=newRgbString
  }
}
}
}

// TODO 5: Create the keepInBounds function
function keepInBounds(number){
  //console.log(number, Math.min(Math.max(0, number), 255))
  return Math.min(Math.max(0, number), 255);
} 

// TODO 3: Create reddify function
function reddify(rgbArray){
  rgbArray[0] = 200
};

// TODO 6: Create more filter functions
function decreaseBlue (rgbArray){
rgbArray[2] -= 50;
console.log(rgbArray)
rgbArray[2] = keepInBounds(rgbArray[2]);
}

function increaseGreenByBlue(rgbArray) {
  rgbArray[1] = keepInBounds(rgbArray[2] + rgbArray[1]);
}

// CHALLENGE code goes below here
