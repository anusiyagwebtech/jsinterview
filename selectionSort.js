const a = [8,7,6,5,4,3,2,1,32,-5,9];

   const selectionSortAlgorithm = (a) => {
    let steps = 0;
   for (let k = 0; k < a.length; k++) {
    let small = a[k];
    let j = k;
    for (let i = k+1; i < a.length; i++) {
     steps++;
    if (a[i] < small) {
      small = a[i];
      j = i;
    }
   }
   
   let temp = a[k];
    a[k] = small;
    a[j] = temp;
   }
  
   console.log(steps);
   return a;
   }


  

   console.log(selectionSortAlgorithm(a));


 const selectionSortAlgorithmInBook = (a) => {
    let steps = 0;
   for (let k = 0; k < a.length; k++) {
    
    let j = k;
    for (let i = k+1; i < a.length; i++) {
     steps++;
    if (a[i] < a[k]) {
      
      j = i;
    }
   }
   if (k != j) {
    let temp = a[k];
    a[k] = a[j];
    a[j] = temp;
   }
   
   }
  
   console.log(steps);
   return a;
   }


   console.log(selectionSortAlgorithmInBook(a));
