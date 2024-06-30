function carSpeed(){
    n = prompt("Input car speed: ")
    n = parseInt(n)
    if(isNaN(n) || n < 0){
      console.log("Invalid input! Please input a positive number.")
    }
    let min = 70;
    const demerits = Math.floor((n - min) / 5);  
    if (n < min && n > 0){
      console.log("OK")
    }
    else if (n > min && demerits > 12){
      console.log("License suspended")
    }
    else {
      console.log(`Points: ${demerits}`)
    }
    
  }