


// Given a number N. The task is to find the number of set bits in its binary representation using recursion.

  const NumberBits = (number,j = 0) => {
    
    const str = number.toString(2);
    for (let i = 0; i < str.length; i++) {
      if (str[i] == 1) {
        j++
      }
      
    }

    return {count: j, num: str};
    
  }

  console.log(NumberBits(999));


  const NumberBitsRecursive = (number,sum) => {

    if(number === 1) {
      return sum;
    } 

    if(number % 2 === 1) {
        sum++;
    }
   
    return NumberBitsRecursive(Math.floor(number/2), sum);

  }

  console.log(NumberBitsRecursive(999,1));
   

   
// the parameter take the value assigned when we don't give anything to the sum



 const NumberBitsRecursive = (number,sum = 0) => {

    if(number === 1) {
      return sum+1;
    } 

    if(number % 2 === 1) {
        sum++;
    }
   
    return NumberBitsRecursive(Math.floor(number/2), sum) 

  }

  console.log(NumberBitsRecursive(999));


 const NumberOneBitsBrianKerinigan = num => {
    let count = 0;
    while(num > 0) {
      count++;
      num = num & (num-1);
    }
    return count;
  }

  console.log(NumberOneBitsBrianKerinigan(4));


 const recusiveWithAndRightShift = (num,c = 0) => {
      
     if(num == 0) {
      return c; 
     } 
        
    c++;
    return recusiveWithAndRightShift((num & (num - 1)), c);
    }

   console.log(recusiveWithAndRightShift(1867867346));

  
    const oneBitsCount = (n) => {
  
      if (n == 0) {
        return 0;
      }
      if ((n & 1) === 1) {
        return 1 + oneBitsCount(n >> 1);
      } 

      return oneBitsCount(n >> 1);

    }
     const n = 15;
     console.log(oneBitsCount(n)); 

