/*összegző!
*/

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
sum += numericArray[i];

}
console.log("Sum: ", sum);

/*számlálás*/

let db =0;
for (let i = 0; i <numericArray.length; i++){
    if (numericArray[i] % 2 == 0){
        db++;
    }
}
console.log("Even numbers: ", db)

/*szésőérték*/

let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }

    
}
console.log("The biggest element:" , biggest)

let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest) {
        smallest = numericArray[i];
    }

    
}
console.log("The smallest element:" , smallest)

/*eldöntée*/

let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] ==5){
        contains =true;
    }
    
}
console.log("this array contains 5:", contains);

let contains1 = false;
for (let i = 0; i < numericArray.length && contains1 == false; i++) {
    if (numericArray[i] ==15){
        contains1 =true;
    }
    
}
console.log("this array contains1 15:", contains1);
