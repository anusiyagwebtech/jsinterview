// first method own creation
     
     let x = 4, y = 4, c = 3;

      let xd = x - 1;
      let yd = y -1;

      let a = [
        [2, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 0, 0],
        [2, 0, 0, 1, 1, 0, 1, 1],
        [2, 2, 2, 2, 2, 0, 1, 0],
        [2, 1, 1, 2, 2, 0, 1, 0],
        [1, 1, 1, 2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1, 2, 1, 1],
        [2, 1, 1, 1, 1, 2, 1, 1]
      ];

    

      let v = a[xd][yd];
      const singleArrayChanger =  (array,x,y, c) => {
   
      console.log(`x: ${x}`);
       if (array[x][y] == v) {
        array[x][y] = c;
       }

       if (array[x][y-1] == v) {
        array[x][y-1] = c;
         singleArrayChanger(array,x,y-1,c);
       }
       
       if (array[x][y+1] == v) {
        array[x][y+1] = c;
        singleArrayChanger(array,x,y+1,c);
       }

       if (array[x-1][y] == v) {
        array[x-1][y] = c;
        if(x-1 > 0) {
          singleArrayChanger(array,x-1,y,c);

        }
       }
       if (array[x+1][y] == v) {
        array[x+1][y] = c;
       
        if (x+1 < array.length-1) {
          singleArrayChanger(array,x+1,y,c);
        }
       }
        return array;
      }

      console.log(singleArrayChanger(a,xd,yd,c));


// second gpt

// actually this method is really ready like first we check the co-ordinate x, y and then the value of the initial one . if it is doesn't follow the condition then we return or we call the functions

let startValue = array[x][y];

 const colorPicker2 = (array, x, y, c) => {
   if(x < 0 || x >= array.length || y < 0 || y >= array[0].length || array[x][y] !== startValue) {
     return ;
   }
   array[x][y] = c;
   colorPicker2(array,x-1,y,c);
   colorPicker2(array,x+1,y,c);
   colorPicker2(arrayx,y-1,c);
   colorPicker2(array,x,y+1,c);

   return array;
 }
      

let a = [
        [2, 1, 1, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 1, 1, 0, 0],
        [2, 0, 0, 1, 1, 0, 1, 1],
        [2, 2, 2, 2, 2, 0, 1, 0],
        [2, 1, 1, 2, 2, 0, 1, 0],
        [1, 1, 1, 2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1, 2, 1, 1],
        [2, 1, 1, 1, 1, 2, 1, 1],
      ];

      let x = 4,
        y = 4,
        c = 3;
      const colorPicker = (a,x,y,c) => {
        let initialValue = a[x - 1][y - 1];

        const singleArrayChanger = (array, x, y, newValue) => {
          // Check for base cases
          if (
            x < 0 ||
            y < 0 ||
            x >= array.length ||
            y >= array[0].length ||
            array[x][y] !== initialValue
          ) {
            return;
          }

          // Change the current cell's value
          array[x][y] = newValue;

          // Recursively call function for adjacent cells
          singleArrayChanger(array, x, y - 1, newValue); // Left
          singleArrayChanger(array, x, y + 1, newValue); // Right
          singleArrayChanger(array, x - 1, y, newValue); // Up
          singleArrayChanger(array, x + 1, y, newValue); // Down;
        };
        singleArrayChanger(a, x, y, c);
        return a;
      };

      console.log(colorPicker(a,x,y,c));




   
