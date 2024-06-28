
  const a = [6, 5, 4,67, 78, 3,2,1];
  let steps = 0; 

   for (let i = 1; i < a.length; i++) {
    let store = a[i];
    let position = i-1;

  
    

    while(position >= 0 && a[position] > store) {
       steps++;
      
     
      a[position + 1] = a[position];

  

      
    //  console.log(`i: ${i}\nposition: ${position} \n`);
      position--;
    }
    a[position + 1] = store;
    steps++;
   }

   console.log(steps);
   console.log(a);
   
