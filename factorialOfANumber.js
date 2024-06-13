 const FactorialOfANumber = (number) => {
      if(number  === 1) return 1;

      return FactorialOfANumber(number-1) * number;
     
    }

    console.log(FactorialOfANumber(8));





    const FactorialOfANumberFor = (number) => {
      let factor = 1;
      for (let index = 1; index <= number; index++) {
        factor *= index;
        
      }
      return factor;
    }

    console.log(FactorialOfANumberFor(3));

    
 const FactorialOfANumberReduce = (number) => Array.from({length: number}).map((_,i) => i+1).reduce((prev,current,ci,array)=>{
      prev *= current;
      return prev;
    },1);

    console.log(FactorialOfANumberReduce(4));
