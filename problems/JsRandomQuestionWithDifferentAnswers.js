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
    
    const a = [34, 78 , 5443, 2, 43, 234, 21];

    const secLargeNum = arr => {
       arr.sort((a,b) => b - a);

       return arr[1];
    }

    console.log(secLargeNum(a));
    console.log(a);




