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




     function lastButNotLeast(a,b, c) {
      a = a%10;
      b = b%10;
      c = c%10;

      if(a == b || b == c || a == c) {
        return true;
      }else {
        return false;
      }
     }

     console.log(lastButNotLeast(454, 34, 87));




function lastButNotLeast(a,b, c) {
      a = a%10;
      b = b%10;
      c = c%10;
      return a == b || b == c || a == c;
     }

  function lastButNotLeasti(a,b, c) {
      const arrayoftheUniqueLastDigit = new Set([a%10, b %10, c%10]);
      return arrayoftheUniqueLastDigit.size < 3;
     }



     function lastButNotLeastii(a,b, c) {
      const arr = [a, b , c];
      const uniquenumbers = arr.map((value) => value%10);

      for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < arr.length; j++) {
         if(arr[i] == arr[j]) return true;
       }

     }
     return false;
    }

    console.log(lastButNotLeastii(47, 3423, 48));
