  // Find the frequency of elements in array
    const a = [3, 7,3,9,8, 9, 3];

    const unique = [...new Set(a)];

    console.log(a);
    console.log(unique);

    console.log(unique);
    
    for (let i = 0; i < unique.length; i++) {
      let sum = 0;
      for (let j = 0; j < a.length; j++) {
       

        if(unique[i]  == a[j]) {
          sum++;
        }
      }
      console.log(`${unique[i]} appears ${sum} times`);
    }
