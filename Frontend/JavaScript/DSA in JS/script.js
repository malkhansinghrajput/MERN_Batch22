let a = "JAy shree Ram";

for(let i = 0 ; i<10 ; i++){
   console.log(a)
}

// write a programe to print 1 to n ;

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

let n = 100;

for(let i=0; i<=n; i++){
    if(i % 2 === 0){
        console.log('even number is' , i)
    }else{
        console.log('odd number is', i)
    }
}


// write a programe to check the leap year ?

let year = 2020;
if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0){
    console.log('this is leap year',year)
}