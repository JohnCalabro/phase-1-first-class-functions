
function receivesAFunction(callback) {
    callback();
    
}
  
function returnsANamedFunction() {
     return function anything() {

     }}
     
function returnsAnAnonymousFunction() {
    return function() {}
}


  
  










  
  
  /*
  
  function Monday() {
      console.log("Go for a five-mile run");
      console.log("Pump iron");
   }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }

  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

   function Monday() {
     runFiveMiles();
     liftWeights();
  }

  function Monday() {
    exerciseRoutine(liftWeights);
  }

   function exerciseRoutine(postRunActivity) {
     runFiveMiles();
     postRunActivity();

   }

   exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
  });

  */
