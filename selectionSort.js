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
    const a = [6,5,4,3,2,1,0,-1];
      let steps = 0;
      for (let j = 0; j < a.length; j++) {
        for(let i = 0; i < a.length - j; i++) {
        steps++;
        if (a[i] > a[i+1]) {
          let temp = a[i];
          a[i] = a[i+1];
          a[i+1] = temp;
          steps++;
        }
      }
      }
    console.log(a);
    console.log(steps);
      let b = [6,5,4,3,2,1,0,-1];
      let step = 0;
  
    for (let i = 0; i < b.length; i++) {
      let least = i;
      for (let j = i+1; j < b.length; j++) {
       step++;
       if (b[i] > b[j]) {
        least = j;
        // step++;
       }
        
      }
      if(least !== i) {
        let temp = b[i];
        b[i] = b[least];
        b[least] = temp;
        step++;
      }
      
    }

    console.log(b);
    console.log(step);
