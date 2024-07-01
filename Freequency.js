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



