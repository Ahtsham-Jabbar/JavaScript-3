// let str = "Hello World";
// let str2 = 'Apna College';

// // console.log(str.length);

// console.log(str[6]);

// Template Literals

// let obj = {
//     items: "Pen",
//     price: 10,
// };

// // console.log("The Price of", obj.items, "is", obj.price, "rupees");
// let output = `The price of ${obj.items} is ${obj.price} rupees`;
// console.log(output);


// let output = ` The Calculation of this ${1 + 2 + 3 + 4 + 5}`;
// console.log(output);

// Escape Characters

// console.log("Apna\nCollege");  // For next line we write \n
// console.log("Apna\tCollege");    //  For Tab space we write \t

// String Methods

let str = "Hello World";
let str2 = "AHTSHAM JABBAR";
let str3 = "   My name is Ahtsham   ";
console.log(str.toUpperCase());   // str.toUpperCase()
console.log(str2.toLowerCase());  // str.toLowerCase()
console.log(str3.trim());         // str.trim()

console.log(str.slice(3, 5));     // str.slice(start,end)

let result = str.concat(str2);  // method 1 to concat two strings
let result2 = str + str2;       // 2nd method to concat two strings
console.log(result);
console.log(result2);


console.log(str.replace("Hello", "Asalam"));   // For Replacing we use str.replace(replaceNEw, WhereReplace)

console.log(str.charAt(6));    // For Searching what chracter on where index

// 0 1 2 3 4 5 6 7   we say this as index like o index 1 index



