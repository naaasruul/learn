function fizzBuzz(){
  for(var i = 0; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log("fizzBuzz");
    }
    else if(i % 5 == 0){
      console.log("Buzz");
    }
    else if(i % 3 == 0){
      console.log("fizz");
      }
    else(
      console.log(i)
    )
  }
}

fizzBuzz();
