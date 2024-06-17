export const add = (num1, num2) => {              //data.js
    return num1 + num2;
}




import { add } from './data.js';                  //index.js

let result = add(3, 2);

console.log(result);





//output
5
