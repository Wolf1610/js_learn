
console.log("3" > 2);
console.log("03" > 1);


// This is not a good practice to write this type of conversion below 
console.log(null > 0);
console.log(null >= 0);
console.log(null <= 0);


/*
The reason is that an equality check == and comparisions > < >= <= works differently.

Comparision convert nnull to a number. treating it as 0.
That's why null >= 0 is true and null > 0 is false
*/

// This is not a good practice to write below 
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined > 0);
console.log(undefined < 0);


console.log("2" === 2);
