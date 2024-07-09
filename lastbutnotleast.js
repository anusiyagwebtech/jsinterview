 //   Three positive numbers are given: a, b and c. Return true if at least two of the numbers have the same last digit.

     let  a = 343, b = 24, c = 893;

     let count = 0;

      a  = a%10;
      b = b%10;
      c = c%10;

     if (a == b || a == c || b == c) {
        console.log(true);
     }
     else {
        console.log(false);
     }
