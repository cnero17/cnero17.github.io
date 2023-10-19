/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);        
  $(document).on('keyup', handleKeyUp)                   // change 'eventType' to the type of event you want to handle
  $(document).on(wallCollision)
  var KEY = {
    LEFT: 65,
    RIGHT: 68,
    UP: 87,
    DOWN: 83
};

var walker = {
 xCoordinate: 0,
 yCoordinate: 0,
  xSpeed: 0,
  ySpeed: 0


};
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {   
      walker.xSpeed = -5;
    }
    if (event.which === KEY.RIGHT) {   
      walker.xSpeed = 5;
    }
    if (event.which === KEY.UP) {   
      walker.ySpeed = -5;
    }
    if (event.which === KEY.DOWN) {   
      walker.ySpeed = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {   
      walker.xSpeed = 0
    }
    if (event.which === KEY.RIGHT) {  
      walker.xSpeed = 0 
    }
    if (event.which === KEY.UP) {   
      walker.ySpeed = 0
    }
    if (event.which === KEY.DOWN) {  
      walker.ySpeed = 0 
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem() {
walker.xCoordinate += walker.xSpeed;
walker.yCoordinate += walker.ySpeed;
}

function redrawGameItem() {
$("#walker").css("left", walker.xCoordinate)
$("#walker").css("top", walker.yCoordinate)
}

function wallCollision() {
if (walker.xCoordinate > 390) {
  walker.xCoordinate = 390;
}
else if (walker.xCoordinate < 0) {
  walker.xCoordinate = 0;
}
else if (walker.yCoordinate > 390) {
  walker.yCoordinate = 390;
}
else if (walker.yCoordinate < 0) {
  walker.yCoordinate = 0;
}
}
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
