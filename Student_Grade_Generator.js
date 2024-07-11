function stdMarks(){
  n = prompt("Input student marks (0 - 100): ")
  if (isNaN(n) || n < 0 || n > 100) {
      alert("NOT VALID! Marks should be between 0 and 100.");
      return;
  }

  if (n > 79){
    alert("A")
  }
  else if(n >= 60){
      alert("B")
    }
  else if (n >= 50){
      alert("C")
    }
  else if (n >= 40){
      alert("D")
    }
  else if (n < 40){
    alert("E")
  }

}

stdMarks()