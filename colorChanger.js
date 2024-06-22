  <script>
     
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



      






    </script>
