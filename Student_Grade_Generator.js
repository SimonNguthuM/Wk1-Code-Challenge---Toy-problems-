function stdMarks(){
    n = prompt("Input student marks (0 - 100): ")
    if (isNaN(n) || n < 0 || n > 100) {
        alert("NOT VALID! Marks should be between 0 and 100.");
        return;
    }
  
    if (n > 79){
      console.log("A")
    }
    else if(n >= 60){
        console.log("B")
      }
    else if (n >= 50){
        console.log("C")
      }
    else if (n >= 40){
        console.log("D")
      }
    else if (n < 40){
      console.log("E")
    }
    
  }