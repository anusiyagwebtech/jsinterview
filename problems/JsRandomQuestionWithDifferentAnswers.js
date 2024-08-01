***** //  Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays. 
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



