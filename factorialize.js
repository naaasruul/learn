function factorialize(num){
  var result = 1;
  for(var i=1; i<=num; i++){
    result = result * i;
//     result = 1 x 2 x 3 x 4 x 5
  }
  console.log(result);
}

factorialize(5);
