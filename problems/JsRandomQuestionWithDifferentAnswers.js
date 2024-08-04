***** //  Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers 
into separate arrays. 
(.one.)
1. solution:  (filter, array destructure);

  const condition = (num ) => num%2 === 0;
   
     const separator = (array, condition ) => {
      const even = array.filter((value) => condition(value));      
      const odd = array.filter((value) => !condition(value));

        return [odd, even];
     }
     const a = [1,2,3,4,56,6,7,8,9,10, 5];

     const [odd, even] = separator(a, condition);

     console.log(odd);
     console.log(even);

Time Complexity: entire array two two times O(n) + O(n) = O(2n) = O(n)
Space complexity same need the space for two arrays accoirding to the number of elements

2. solution:  array.reduce(), destructure

 const condition = (num ) => num%2 === 0;
   
     const separator = (array, condition ) => {
      return   array.reduce((prev, current, currentIndex, wholearray) => {
        prev[condition(current) ? 1 : 0].push(current);
        return prev;
      }, [ [], []])
     }
     const a = [1,2,3,4,56,6,7,8,9,10, 5];

     const [odd, even] = separator(a, condition);

     console.log(odd);
     console.log(even);
Time Complexity: Entire aray through once time complexity O(n) [twice better than previous]
Space Complexity same as filter method storing two different arrays : O(n)

3. solution arraycopy, while loop, 

 const array = [1, 2, 3, 4, 5,11, 6, 7, 8, 9, 10];
      const arr2 = array.slice();
      

    
      const condition = (num) => num%2 === 0;
      const separator = (array, cond) => {

        let left = 0;
      let right = array.length - 1;

      while (left <= right) {
        console.log(array[left]);
        console.log(array[right]);
        if(cond(array[left])){
          left++;
        }else if(!cond(array[right])) {
          right--;
        }
        else {
          let temp = array[left];
          array[left] = array[right];
          array[right] = temp;
          left++;
          right--;
        }

       
        
      }
       
        return [array.slice(left), array.slice(0, left)];
      }


      const [odd, even] = separator(array, condition);

      console.log(odd);
      console.log(even);
      console.log(array);    
      console.log(arr2);

 II. ***** // Write a function that finds the second largest number in an array.

   
  1. array.sort() 

   const a = [34, 78 , 5443, 2, 43, 234, 21];

    const secLargeNum = arr => {
       arr.sort((a,b) => b - a);

       return arr[1];
    }

    console.log(secLargeNum(a));
    console.log(a);

  Time Complexity : O(nlogn)
  Space Cpmplexity: O(n)


2.  forof, -Infinity

  const a = [34, 78, 5443, 2789,345667,23423, 43, 234, 21];

      const secondFinder = (a) => {
        let first = -Infinity;
        let second = -Infinity;
        for (const iterator of a) {
          if (iterator > first) {
           second = first;
           first = iterator;
          } else if (iterator > second && first !== second) {
            second = iterator;
          }
        }
        return second;
      };

      console.log(a);
      console.log(secondFinder(a));

Time Complexity:: O(n)
Space Complexity:: O(1)

3.  

      const a = [78, 76, 45];

      const secondFinder = (a) => {
    
      const arr =  a.reduce((prev,current) => {
          if (prev[0] < current) {
            prev[1] = prev[0];
            prev[0] = current;           
          }
          else if (prev[1] < current && prev[0] !== prev[1]) {
            prev[1] = current;
          }
          return prev;
        }, [-Infinity,-Infinity])
     
        if (arr[1] === -Infinity) {
    throw new Error("There is no second largest number");
  }
        return arr[1];
      
       
      };

      console.log(a);
      console.log(secondFinder(a));

Time Complexity:: O(n)
Space Complexity:: O(1)

III// find the odd even of a number

1.           const oddEven = num => {
            if (num < 0) {
            
              return 'Enter the correct number';
            }

            return  num%2 === 0 ? `The number ${num} is even`:  `The number ${num} is odd`;
           }
Time Complexity: O(1)

Space Complexity: O(1)

2. 

 const oddEven = num => {
            if (num < 0) {
            
              return 'Enter the correct number';
            }

            return ( num & 1) === 0 ? `The number ${num} is even`:  `The number ${num} is odd`;
           }

IV
// IV  . Reverse a Number
const ReverseNumber = num => {  
        let revNum = 0;
        while(num) {
          revNum = revNum*10 + (num % 10 );
          num = Math.floor(num / 10);
        }
        return revNum;
      }
      console.log(ReverseNumber(654665));
      console.log(ReverseNumber(12));
      console.log(ReverseNumber(765));
Time Complexity: O(d)
Space Complexity: O(1)

V

// Power of a number

   const powerNum = (num, power) => {

        return Math.pow(num, power);
      }

      const powerNum2 = (num, power) => {
      
        let result = 1;

        for (let i = 0; i < power; i++) {
          result *= num;
         
        }

        return result;
      }
      

      console.log(powerNum2(6, 3));
      console.log(powerNum(6, 3));
for power number2 function 

SpaceComplexity: O(1)
Time Complexity: O(power)

  3  const PowerOfAnumber = (num, power) => {


      if(power === 0) return 1;

      if(power % 2 === 0) {
        const halfpower = PowerOfAnumber(num, power/2);
        return halfpower*halfpower;
      }else {
        return num * PowerOfAnumber(num, power - 1); 
      }
    }

    console.log(PowerOfAnumber(5, 4));

Time Complexity: O(logp)
space complexity: O(1)

... 6 ... 
  
 1. Euclidean Algorithm

 const gcd = (num1, num2) => {


        while (num1 !== 0) {
       
          let temp = num1;

          num1 = num2 % num1;

          num2 = temp;

        }

        return num2;
       }

       console.log(gcd(98, 56));

Time Complexity:O(log(min(a,b)))
Iterative Space Complexity: O(1)


... 7 ... 

all devicer of a number

1.   // Print all divisors of a number

        const devicer = (num) => {


            let a = [num];
          for (let i = Math.floor(num/2); i > 0; i--) {

           
           if (num % i === 0)
           a.push(i);          

          }

          return a;


        }

        console.log(devicer(69));
2.  const allDevicer = num => {

         let square = Math.sqrt(num);
         let devicers = [];
         for(let i = 1; i <= square; i++) {
          if (num % i == 0) {
            devicers.push(i);   
            if (num / i !== i) {
              devicers.push(num/i);
            }        
           
          

          } 
          

         }
         return devicers;


      }

      console.log(allDevicer(36));
efficiency adhigam
  time : O(rootNlogRootn)
space : O(rootN)


  const primeNumber = num => {
       let a = [];
        for (let i = 2; i <= Math.sqrt(num) ; i++) {
          if (num % i === 0) {
            a.push(i);

            if(num / i !== i) {
              a.push(num/i)
            }
          }
        }
        return [a.length > 0 ? "It is not a prime number": 'it is a prime number', a];

       }
     

       const primeNumber2 = num => {

        for (let i = 2; i <= Math.sqrt(num); i++) {
          if(num % i === 0)  return `${num} is not a prime number`

          
        }
        return `${num} is a prime number`;

       }
      
       console.log(primeNumber2(79));

  const isPrime = num => {

        const p = `${num} is a prime number`;
        const n = `${num} is not a prime number`;       
       
        if (num === 1) return n;
        if (num <= 3) return p;

        if(num % 2 === 0 || num % 3 === 0) return n;
        
       for(let i = 5; i*i <= num; i += 6) {
        if(num % i === 0 || num % (i + 2) === 0) return n;

       }

       return p;
        

       }


        console.log(isPrime(54));
        console.log(isPrime(49));
        console.log(isPrime(2741));
        console.log(isPrime(41));
             
//  Armstrong Number::

const armstrongNumber = num => {
     let digit = Math.floor(Math.log10(num)) + 1;
     let store = num;
     let check = 0;

     while (num) {
      
     check += Math.pow(num % 10, digit);

      num = Math.floor(num/10);
     }

   
 
  
  return check === store ? "Armstrong Number": "Not a armstrong number";
}
  
console.log(armstrongNumber(9475));

Time Complexity: 𝑂(log10num)
Space Complexity: O(1)

function  armstrongNumber(n) {
  let digit = Math.floor(Math.log10(n)) + 1;
  const origin = n;
  let newnum = 0;
  while(n) {
  
    
   newnum += Math.pow(n%10, digit);
   
   n = Math.floor(n / 10);   
   
  }
  return newnum === origin;
}

console.log(armstrongNumber(153));

const pallindrome = num => {

    let newnum = 0;
    const origin = num;
    while(num) {
     newnum = newnum*10 + num%10;
    
     num = Math.floor(num/10)
    }
    return newnum === origin;
    
    }
    
    console.log(pallindrome(464));
    console.log(pallindrome(4649));
       

  space: O(1)
  time: O(d)

    const pallindrome = (num) =>
        num.toString() === num.toString().split("").reverse().join("");

      console.log(pallindrome(15651));
      console.log(pallindrome(1561));

 space Complexity: O(d)
  time complexity: O(d)

... sqrt the number using binary search

  const sqrtBinarySearch = num => {

   let low = 0;
   let high = num;
   let precision = 0.000001;
   

  while(high - low > precision) {
    
    let mid = (high + low ) / 2 ;

    if(mid*mid > num) {
        high = mid;
    }
    else {
        low = mid;
    }


  }
  return (low+high)/2;

}

console.log(sqrtBinarySearch(78));

time complexity: O(logN)
space Complexity: O(1)


     const newtonSqrt = num => {

        let guess = num/2;
        let precision = 0.0000001;
        while(Math.abs(guess * guess - num) > precision) {

            guess = (guess + (num / guess)) / 2;


        }
        return guess;



     }

     console.log(newtonSqrt(25));
     console.log(newtonSqrt(37));
     console.log(newtonSqrt(28));

.... perfect ....

    const perfectNumber = num => {

     let newnum = 0; 
      for(let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
          newnum += i;
          
          if(num/i !== i) {
             newnum += num/i;
          }
        }
      }
      
          console.log(newnum);
          console.log(num);        
    return newnum/2 === num;
    }
     
    console.log(perfectNumber(28));

