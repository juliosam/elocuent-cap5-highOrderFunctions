let arrays = [[1, 2, 3], [4, 5], [6]];

 let newa = arrays.reduce( (a,b) => a.concat(b))
 
 console.log(newa)



 let loop = function(value,test,upDate,body){
  
  for(let count = 0 ; ; count++){
     if (test(value)){
            body(value);
            value= upDate(value);
     }              
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
