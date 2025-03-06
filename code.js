function mergesort(array){
for (let i = 1; i < array.length; i = 2 * i){
    for (let left = 0; left < array.length - 1; left+=2*i){  
         let right = Math.min(left + i , array.length - 1);
         let bound = Math.min(left + (2 * i) - 1, array.length - 1)
         let lptr = left;
         let rptr = right;
         while (lptr <= right && rptr <= bound){
             if (array[lptr] > array[rptr]){
                 let tmp = array[rptr];
                 let index = rptr;
                 while(index > lptr){
                     array[index] = array[index - 1];
                     index--;
                 }
                 array[lptr] = tmp;
                 lptr++;
                 right++;
                 rptr++;
             }
             else{
                 lptr++;
             }
        }
    }
 }
 return array;
}
