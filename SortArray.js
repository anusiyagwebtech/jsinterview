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
// version 2 of assending and descending both
 function sortthat(array, sym) {

  for (let i = 0; i < array.length; i++) {   
   for (let j = 0; j < array.length; j++) {
   
    eval(
      `
      if (array[i] ${sym} array[j]) {
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }   
      `
    )  
   }  
 }
 return array;
 }

 console.log(sortthat(array, '>'));
 console.log(sortthat(array, '<'));

// bubble sort array

 const array = [897, 98, 54, 9 ,4243, 897589, 324];
 const bubbleSortArray = (array) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
       if (array[i] > array[i + 1]) {
         let temp = array[i];
         array[i] = array[i+1];
         array[i+1] = temp;
         swapped = true;
       }

       
      
    }
  }while(swapped)

  return array;
  
 }

  console.log(bubbleSortArray(array));

// using while

const bubbleSortArray = (array) => {
  let swapped = true;
 while (swapped) {
  swapped = false;
  for (let i = 0; i < array.length; i++) {
       if (array[i] < array[i + 1]) {
         let temp = array[i];
         array[i] = array[i+1];
         array[i+1] = temp;
         swapped = true;
       }

 }
  
 }
 return array;
 }
 
 console.log(bubbleSortArray(array));
