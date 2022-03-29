let arrays = [[1, 2, 3], [4, 5], [6]];

 let newa = arrays.reduce( (a,b) => a.concat(b))
 
 console.log(newa)



 let loop = function(value,test,upDate,body){
  let varue = value;
  for(let count = 0 ; count<value; count++){
     if (test(varue)){
            body(varue);
            varue= upDate(varue);
     }              
  }
}
loop(3, n => n > 0, n => n-1, console.log);




function every(array, test) {
   return !array.some((a) => !(test(a)))}
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true


  function allof(array,test){
   for (let v of array){
      if(!test(v)==true){
         return false
      }
   }
   return true
  }

  console.log(allof([1, 3, 5], n => n < 10));
  // → true
  console.log(allof([2, 4, 16], n => n < 10));
  // → false
  console.log(allof([], n => n < 10));
