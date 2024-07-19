  
        // Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays. 

        function GroupArrays(array, condition) {
    

        const    trueConditionArray = array.filter((value, index) => condition(value) );
         const   falseConditionArray = array.filter((value, index) => !condition(value));

            return [trueConditionArray, falseConditionArray];
          

        } 
        const condition = (value)=> value%2 == 0;
        const aray = [8,2,3,4,56,6,7,5,1,9];
        [even,odd];
        []
        // console.log(GroupArrays(aray,condition));

        function GroupArrays (a,condition)  {
            let oddArray = [];
            let evenArray = [];
          
            for (let v of a) {
              if (condition(v)) evenArray.push(v);
              else oddArray.push(v);
            }


            return [oddArray, evenArray]; 
          
        }

        // console.log(GroupArrays(aray, condition));


        function groupArrays (aray, condition) {
            let left = 0, right = aray.length  - 1;

            while (left <= right) {
                if (condition(aray[left])) {
                   left++;
                   
                }
                else if (!condition(aray[right])) {
                    right--;
                } 
                else {
                    [aray[left], aray[right]] = [aray[right], aray[left]];
                }
            }
            const trueConditionArray = aray.slice(0, left);
            const falseConditionArray = aray.slice(left);

            return [trueConditionArray, falseConditionArray];
           
            

        }

        console.log(groupArrays(aray, condition));

        
        
