// let a = "JAy shree Ram";

// for(let i = 0 ; i<10 ; i++){
//    console.log(a)
// }

// write a programme to check the number is psitive,negative and zero?

let number = prompt("Enter a number to check the num is positive ,negative and Zero")
if(isNaN(number)){
    console.log("Invalid input")
}
else if(number > 0){
    console.log(`The ${number} is Positive`)
}else if(number < 0){
    console.log(`The ${number} is negative`)
}else {
    console.log(`The ${number} is Zero`)
}
// else{
//     alert("plese enter valid input")
// }
// // write a programe to print 1 to n ;

// let n= 100

// for(let i = 1 ; i<=n; i++){
//     console.log(i)
// }


//write to programe to print all even number 0 to n ?

// let n = 90;
// for(let i = 0; i<=n; i=i+2){
// console.log(i)
// }

// write a programe to print odd number 1 to  n ?

// let n = 90;
// for(let i = 1; i<n; i = i+2){
//     console.log(i)
// }

// write a programe to n to 1 reverse count print ?

// let n = 90;
// for(let i = n; i>0; i--){
//     console.log(i)
// }


// write a programe to print odd and even number to n ?

// let n = 100;

// for(let i=0; i<=n; i++){
//     if(i % 2 === 0){
//         console.log('even number is' , i)
//     }else{
//         console.log('odd number is', i)
//     }
// }


// write a programe to check the leap year ?

// let year = 2020;
// if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0){
//     console.log('this is leap year',year)
// }

// Q wap to print queue of any no and square of any no.
//   let num = 9;
//   let square = num ** 2;
//   let cube = num ** 3;
//   console.log(`square of ${num} is : ${square}`)
//   console.log(`square of ${num} is : ${cube}`)

// Q wap to print 1 to n queue of any no and square of 1 to n no.

// let num = 100;
// for(let i = 1; i<=num; i++){
//     let squre = i ** 2
// console.log(`square of ${i} is ${squre}`)
// }
// Q Wap to tell how many no is devisible by 7,11,13 from 1 to 100;
// let num = 100 
// let count = 0 ;
//   for(let i = 1; i <= num; i++){
//     if(i % 7 === 0 || i % 11 === 0 || i % 13 === 0){
//         count++
//         console.log(`number is divided by 7,11,13 is ${i}`)
//     }
//   }
//   console.log(`total number is divided by 7,11,13 is ${count}`)
// Q Wap to tell how many no is devisible by 3 and 5 both from 1 to 100;(15,30,45,60,75,90)
// Q Wap to tell maximum no between 5 no.