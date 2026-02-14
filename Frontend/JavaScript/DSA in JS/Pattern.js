// write a programe to print below Pattern?

//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *

function pattern (row,col){
    let ans = ""
    for(let i = 1; i <= row; i++){
        for(let j = 1; j <= col; j++){
        //  ans = ans + "*"
        // ans +=" " + j
         ans +=" " + i
        }
        console.log(ans);
        ans = ""

    }
}

pattern(5,5)

// write a programe to print ?

// *
// * *
// * * *
// * * * *
// * * * * *


function starPattern(row){
    ans= ""
    for(let i = 1; i >=row; i++){
        for(let j = 1 ; j <= i; j++){
            // ans += " " + "*"
            // ans +=" " + j
            ans += " " + i
        }  
         console.log(ans)
      ans = ""
    }
   
}

starPattern(5)

function starrevPattern(row){
    ans= ""
    for(let i = row; i >=1; i--){
        for(let j = 1 ;  j <= i; j++){
            ans += " " + "*"
            // ans +=" " + j
        }  
         console.log(ans)
      ans = ""
    }
   
}

starrevPattern(5)
// - - - - *
// - - - * *
// - - * * *
// - * * * *
// * * * * *

function pattern1(row) {
    let ans = ""
    let space1 = ""
    let print = ""
    for(let i = 1; i <=row; i++){

       for( let space = 1; i<=row-i; space++){
        space1= "-"
       }
       for(let j=1 ; j<=i; j++){
        ans =ans + " "+"*" ;
       }
      print = space1 + ans
      console.log(print)
      print = ""
      space1=""
    }

}

pattern1(5)