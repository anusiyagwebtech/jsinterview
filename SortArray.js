//sort array 
// It really challenging and superfun using third variable store 
function sortthat(array) {

  for (let i = 0; i < array.length; i++) {   
   for (let j = 0; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }     
   }  
 }
 return array;
 }

 console.log(sortthat(array));
