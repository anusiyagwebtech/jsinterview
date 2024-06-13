 const FactorialOfANumber = (number) => {
      if(number  === 1) return 1;

      return FactorialOfANumber(number-1) * number;
     
    }

    console.log(FactorialOfANumber(8));
