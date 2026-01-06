/**
 * (1) Even Odd Section
 */

/**============================================================================== */

// 1. Write a program to check whether a number is Even or Odd.
/*
let x = parseInt(prompt("Enter a Number"))
if(x % 2 == 0) {
  console.log(`${x} is Even Number`)
}else{
    console.log(`${x} is Odd Number`)
}
*/

/**============================================================================== */

// 2. Given an integer, check if it is divisible by 5 and 11.
/*
let x = parseInt(prompt("Enter a Number to check divisible by 5 and 11"))
if( x % 5 == 0 && x % 11 == 0){
    console.log(`the number ${x} is divisible by 5 and 11 both`)
}
else if(x % 5 == 0){
   console.log(`the number ${x} is divisible by 5 `) 
}
else if(x % 11 == 0){
   console.log(`the number ${x} is divisible by 11 `) 
}
else{
    console.log(`the number ${x} is not divisible by 5 and 11 both`)
}
*/


/**============================================================================== */

// Check Whether a Number is positive, negetive or Zero.
/*
let m = parseInt(prompt("Enter a Number to check positive negative or zero"))
if(m===0){
    console.log(`the number ${m} is Zero`)
}else if(m > 0){
    console.log(`the number ${m} is Positive`)
}else if( m < 0){
    console.log(`the number ${m} is Negative`)
}else{
    console.log("Please Check your digit it's not number")
}
*/


/**============================================================================== */

// 4. Check if a number is divisible by 2, 3, and 5 at the same time.
/*
let x = parseInt(prompt("Enter a Number"))
if(x % 2 == 0  &&  x % 3 == 0  &&  x % 5 == 0){
    console.log(`The Number ${x} is Divisible by 2,3, and 5`)
}else if (x % 2 == 0){
    console.log(`The Number ${x} is Divisible by 2`)
}else if(x % 3 == 0){
    console.log(`The Number ${x} is Divisible by 3`)
}else if(x % 5 == 0){
    console.log(`The Number ${x} is Divisible by 5`)
}else{
    console.log(`This is not Divisible by 2, 3, and 5`)
}
*/

/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

// (2)REVERSING & PALINDROME

/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */


// 5. Reverse a number without using built-in functions. 
/*
 let num = prompt("Enter a number to Print Reverse ")
 let M = num
 let rev = 0
 for(let x = 0; x <= num.length-1; x++){
    let rem = M % 10
        rev = rev * 10 + rem
        M = parseInt(M / 10)
 }
  console.log(`the reverse of ${num} this number is ${rev} `)
*/
  /**============================================================================== */

//   6. Check whether a given number is a palindrome.

/*
 let num = prompt("Enter a number to check palindrome number")
 let M = num
 let rev = 0
 for(let x = 0; x <= num.length-1; x++){
    let rem = M % 10
        rev = rev * 10 + rem
        M = parseInt(M / 10)
 }
 if(num === rev){
  console.log(`the ${rev} is Palindrome Number`)
}else {
    console.log(`the ${num} is not Palindrome Number`)
}
*/

/**============================================================================== */

//  7.Check whether the sum of the first and last digit of a number is equal.
/*
let num = prompt("Enter a Number");
let num1 = num;
let sum1 = 0;
let rem1 ;
let rem2 ;

for(let i = 0; i < num.length; i++){
    rem1 = num1 % 10
    num1 = parseInt(num1 / 10)
    sum1 = sum1 + rem1
}

rem2 = num % 10;
let sum2 = rem1 + rem2;
if( sum2 === sum1) {
    console.log(`The First num ${rem1} and Second num ${rem2} sum is ${sum2} is Equal to the total num ${num} sum are ${sum1}. They both are equal`)
}else{
    console.log("The sum of First and Second num is not equal to the sum of total number")
}
*/

/**================================================================================================= */

// 8. Count how many digits in a number.

/*
let num = prompt("Enter a Number")

for(var i = 1; i <= num.length; i++){
}
console.log(`The total Digit of a Number is ${i-1}`)
*/

/**================================================================================================= */


// 9. Check whether the reverse of a number is divisible by 3.

/*
let num = prompt("Enter a Number");
let num1 = num
let rem = 0 
let rev= 0

for(let x = 0; x < num.length; x++){
      rem = num1 % 10
        rev = rev * 10 + rem
      num1 = parseInt(num1 / 10)
    
}
console.log(`The Number is ${num} `)
if(rev % 3 == 0){
    console.log(`The Reverse Number ${rev} is divisible by 3`)
}else{
    console.log(`The Reverse Number ${rev} is Not divisible by 3`)
} 

/**================================================================================================= */

/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

// � (3)DIGIT OPERATIONS

/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

// 10. Find the sum of digits of a number.
/*
let num = prompt("Enter a number")
let num1 = num;
let rem = 0;
let sum = 0;
for(let i = 0; i<num.length; i++){
    rem = num1 % 10;
    num1 = parseInt(num1/10)
    sum = sum + rem  
}
console.log(`The Number is ${num}`)
 console.log(`The sum of total digit is ${sum}`)  */

 /**================================================================================================= */

//  11. Find the product of digits of a number.
/*
let num = prompt("Enter a Number")
let num1 = num;
let rem = 0;
let prod = 1;
for(let i = 0; i < num.length; i++){
    rem = num1 % 10;
    num1 = parseInt(num1/10)
    prod = prod * rem
}
console.log(`The Number is ${num}`)
console.log(`The Product of total digit is ${prod}`)    */

/**================================================================================================= */

// 12. Find the largest digit in a number.
/*
let num = prompt("Enter a Number");
let num1 = num;
let rem = 0;
let rem1 = 0
for(let i = 0; i<num.length; i++){
    rem = num1 % 10
    if(rem>rem1){
        rem1 = rem
    }
    num1 = parseInt(num1/10)  
}
console.log(`The original number is ${num}`)
console.log(`The Largest digit is ${rem1}`)
*/
/**================================================================================================= */

// 13. Find the smallest digit in a number.
/*
let num = prompt("Enter a Number")
let num1 = num
let rem = 0;
let rem1 = 10;
for(let i=0; i<num.length; i++){
    rem = num1 % 10
    if(rem < rem1){
       rem1 = rem
    }
    num1 = parseInt(num1/10)
}
console.log(`The Number is ${num}`)
console.log(`The Smallest Digit is ${rem1}`)   **/

/**================================================================================================= */

// 14. Print the frequency of each digit in a number
/*
let num = prompt("Enter a Number")
let num1 = num;
let rem  = 0;
let a=0, b=0, c=0, d=0, e=0, f=0, g=0, h=0, i=0, j=0 
for(let i = 0; i < num.length; i++){
    rem = num1 % 10
    if(rem == 0 ){
         a++;
    }
     else if(rem == 1 ){
         b++;
    }
    else if(rem == 2 ){
         c++;
    }
    else if(rem == 3 ){
         d++;
    }
    else if(rem == 4 ){
         e++;
    }
    else if(rem == 5 ){
         f++;
    }
    else if(rem == 6 ){
         g++;
    }
    else if(rem == 7 ){
         h++;
    }
    else if(rem == 8 ){
         i++;
    }
    else if(rem == 9 ){
         j++;
    }
    num1 = parseInt(num1/10)
}
console.log(`0 : ${a}`)
console.log(`1 : ${b}`)
console.log(`2 : ${c}`)
console.log(`3 : ${d}`)
console.log(`4 : ${e}`)
console.log(`5 : ${f}`)
console.log(`6 : ${g}`)
console.log(`7 : ${h}`)
console.log(`8 : ${i}`)
console.log(`9 : ${j}`)    */

/**================================================================================================= */

// 15. Check if digits of the number are strictly increasing (e.g., 1234)
/*
let num = prompt("Enter a Number")
for( let i = 0; i <= num; i++){
    console.log(i)
}
*/
/**================================================================================================= */

// � FACTORIAL & STRONG NUMBERS

/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

// 16. Find the factorial of a number.
/*
let num = parseInt(prompt("Enter a Number"))
let fact = 1;
for(let i = 1; i <= 5; i++){
    fact *= i 
} 
console.log(`The Factorial of ${num} is ${fact}`)   */

/**================================================================================================= */

// 17. Check if a number is a Strong number
// (145 → 1! + 4! + 5! = 145).
/*
let num = prompt("Enter a Number")
let rem = 0;
let copy = 1;
let sum = 0;
let num1 = parseInt(num);
console.log(typeof(num1))
for(let i = 0; i<num.length; i++){  
    rem = num1 % 10 
    for(let j = 1; j<=rem; j++){
         copy *= j 
    }
    sum += copy
    copy = 1
    num1= parseInt(num1/10)
}
if( num == sum){
    console.log(`The Number ${sum} is Strong Number`)
}else{
    console.log(`The Number ${num} is Not Strong Number `)
}  */

/**================================================================================================= */

// 18. Sum of factorial of digits of a number.
/*
let num = prompt("Enter a Number")
let rem = 0;
let num1 = num;
let sum = 0;
let copy = 1 ;
for(let i = 0; i < num.length; i++){
    rem = num1 % 10;
    for(let j = 1; j <= rem; j++){
        copy *= j;
    }
     sum += copy;
     num1 = parseInt(num1/10)
     copy = 1
}
console.log(`The sum of Digit of Factorial of Number is ${sum}`)
*/

/**================================================================================================= */

// 19. Count how many Strong numbers are present between two limits

// let num = parseInt("Enter a Number")
// let num1 = num;
// let rem = 0;
// let copy = 1
// str

// for(let i = 0; i < num; i++){
//     rem = num1 % 10;
//     for(let j = 1; j > rem; j++){
//          copy *= j 
//     }
       
     
// } */


/**================================================================================================= */

// 20. Check whether a number is prime.

/*
let num = parseInt(prompt("Enter a Number"));
let count = 0;

for(let i = 1; i <= num; i++){
    if(num % i == 0){
        count++;
    }
    
}
if(count == 2){
    console.log(`The ${num} is prime number`)
}else {
    console.log(`The ${num} is not Prime Number`)
}
*/

/**================================================================================================= */

// 21. Print all prime numbers in a given range.

/*
let num = prompt("Enter a number to check in Prime Number");
let count = 0
for(let i = 2; i <= num; i++){
      count = 0;

     for(let j = 1; j <= i; j++){

         if( i % j == 0){
          count = count + 1
        } 
     }
    if(count == 2){
        console.log(`Prime num is : ${i}`);
    }
}

*/

/**================================================================================================= */

// 22. Count digits in a number that are prime digits (2,3,5,7).
/*
let num = prompt("Enter a Number to check digit which is Prime number");
let num1 = num
let count = 0;
let rem = 0
for(let i = 1; i <= num.length; i++){
    count = 0;
     rem = num1 % 10 
     for(let j = 1 ; j <= rem; j++){
        if(rem % j == 0){
            count = count + 1;
        }
     }
     if(count == 2){
        console.log(`This Digit ${rem} are prime number`);
     }
     num1 = parseInt(num1/10)
}     */

// smallest version by while loop
/*
let num3 = parseInt(prompt("Enter a Number"))
rem = 0
while(num3>0){
   rem = num3 % 10;
   if(rem == 2 || rem == 3 || rem == 5 || rem == 7){
    console.log(`this is ${rem} digit are prime number`)
   }
   num3 = parseInt(num3/10)
}    */


/**================================================================================================= */

// 23. Check if a two-digit number is a circular prime
// (Prime in normal + reversed form).
/*
let num = prompt("Enter a number")
let num1 = num
let count = 0;
let count1 = 0;
let rem = 0
let rev = 0
for(let i = 1; i <= num.length; i++){
    rem = num1 % 10;
    rev = rev * 10 + rem;
    num1 = parseInt(num1/10) 
} 
console.log(rev)

for( let j = 1; j <= num; j++){
    if(num % j == 0){
        count++ 
    }
}
console.log(count)
for( let k = 1; k <= rev; k++){
    if(rev % k == 0){
        count1++ 
    }
}
 console.log(count1)

if(count == 2 && count1 == 2){
    console.log(`Both rev ${rev} and num ${num} are Prime Number `)
}else if(count == 2 ){
    console.log(`Only num ${num} is Prime number`)
}else if(count1 == 2){
    console.log(`Only rev ${rev} is Prime Number`)
}else{
    console.log(`Both are not prime number`)
}
*/
/**================================================================================================= */

// � PERFECT, ARMSTRONG, AUTOMORPHIC

/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

// 24. Check whether a number is a Perfect number
// (6, 28, 496…).

let num = prompt("Enter")


/**================================================================================================= */


/**================================================================================================= */
 
// 31. Reverse Array.
/*
let arr = [1,2,3,4,5]
let revarr = [];
for(let i = arr.length - 1; i >= 0; i--){
    revarr.push(arr[i])
    console.log(arr[i])
}
console.log(revarr)
console.log(arr)   */

/**================================================================================================= */


// ✅ Anagram Program (Simple & Best Method)

/* Two strings are anagrams when:

1. Same characters
2. Same frequency
3.Order doesn’t matter  */

/*
let str1 = prompt("Enter 1st String");
let str2 = prompt("Enter 2nd String");

str1 = str1.toLowerCase()
str2 = str2.toLowerCase()

if(str1.length != str2.length){
    console.log(`This is Not Anagram`)
}else{

let s1 = str1.split("").sort().join("");
let s2 = str2.split("").sort().join("");

if(s1 === s2){
    console.log(`This is Anagram`)
}else {
    console.log(`This is not Anagram`)
}
    }
    */

// without builtin function

 /*      
let str1 = prompt("plese enter a string");
let str2 = prompt("plese enter a string");

if(str1.length != str2.length){
    console.log("Not Anagram")
}
else{
    let isAnagram = true;

    for(let i=0; i<str1.length;i++){

        let count1 =0;
        let count2 =0;

        for(let j=0; j<str1.length;j++){
            if(str1[i]===str1[j]){
                count1++;
            }
        }

        for(let k=0; k<str1.length;k++){
            if(str1[i]===str2[k]){
                count2++;
            }
        }

        if(count1 !== count2){
            isAnagram = false;
            break;

        }
    }
    if(isAnagram){
        console.log("anagram")
    }else{
        console.log("not anagram")
    }

}

*/

    // let arr = [1,2,3,4,5,6,7]  
    // console.log(arr.length)

    // arr.length = 0;
    // arr[6] = 20
    // console.log(arr[2],arr.length,arr)