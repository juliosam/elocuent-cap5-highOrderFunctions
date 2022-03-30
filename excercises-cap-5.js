const ej1 = "Ejercicio 1"
const ej2 = "Ejercicio 2"
const ej3 = "Ejercicio 3"
const ej4 = "Ejercicio 4"


const espacio =   " \n   \n"

console.log(ej1); //-----------EJERCICIO 1 --------------------

let arrays = [[1, 2, 3], [4, 5], [6]];

 let newa = arrays.reduce( (a,b) => a.concat(b))
 
 console.log(newa)

console.log(espacio)

console.log(ej2); //-----------EJERCICIO 2 --------------------

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


console.log(espacio)

console.log(ej3); //-----------EJERCICIO 3 --------------------


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


  console.log(espacio)

console.log(ej4);  //-----------EJERCICIO 4 --------------------
  
  
  
  function characterScript(code) {
   for (let script of SCRIPTS) {
     if (script.ranges.some(([from, to]) => {
       return code >= from && code < to;
     })) {
       return script;
     }
   }
   return null;
 }


 function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}


  function dominantDirection(text) {
   let scripts = countBy(text, char => {
     let script = characterScript(char.codePointAt(0));
     return script ? script.direction : "none";
   }).filter(({direction}) => direction != "none");
   let mayor = scripts.reduce((a,b) => {
                 if (a.count > b.count){ return a.name}
                     else{return b.name}
   });
   return mayor;
   }
 
 
 console.log(dominantDirection("Hello!"));
 // → ltr
 console.log(dominantDirection("Hey, مساء الخير"));
 // → rtl

 
