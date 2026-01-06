// Callback :-

// function CallbackHell (Method, Url, next) {
//     const ob1 = new XMLHttpRequest()
//      ob1.responseType = "json"
//      ob1.open(Method,Url)
//      ob1.send()
//      ob1.onload = () => {
//         console.log(ob1.response)
//         next(ob1.response)
//      }
// }



// CallbackHell("GET", `https://fakestoreapi.com/products`, (data) => {
//     console.log(data)
//     CallbackHell("GET",`https://fakestoreapi.com/products/category/${data[0].category}`, (data) =>{
//         console.log(data)
//         CallbackHell("GET", `https://fakestoreapi.com/products/${data[0].id}`, (data)=>{
//             console.log(data)
//             CallbackHell("GET", `https://fakestoreapi.com/products/category/${data.id}`, (data)=>{
//             console.log(data)
//         })
//         })
//     } )
// })

// Promise:-

// const pro = new Promise ((resolved,rejected) => {
//     resolved("Promise is Solved")
//     rejected("promise is rejected")
   
// })
// console.log(pro)

//  pro.then((resolved) => {
//     console.log(resolved)
//  })
//  .catch((err)=>{
//     console.log(err)
//  })


//  We are doing Api calling by Fetch

// let apifetch = fetch("https://fakestoreapi.com/products")
// console.log(apifetch)

// apifetch.then( (op) => {
//    console.log(op)
// })
// .catch( (err) => {
//    console.log(err)
// })


// Now we are converting body data into json

// fetch("https://fakestoreapi.com/products").then( (op) => {
//    op.json().then((op) => {
//     console.log("Api Response", op)
//    })
// })
// .catch( (err) => {
//    console.log(err)
// })

// apifetch.then( (op) => {
//    op.json().then((op) => {
//     console.log("Api Response", op)
//    })
// })

// .catch( (err) => {
//    console.log(err)
// })


// resolved Callback hell by promise 
// function using Xhr
//  function CallbackHell (Method, Url, next) {
//     const ob1 = new XMLHttpRequest()
//      ob1.responseType = "json"
//      ob1.open(Method,Url)
//      ob1.send()
//      ob1.onload = () => {
//         console.log(ob1.response)
//         next(ob1.response)
//      }
// }

// function FetchProducts(Url) {
// const res =  fetch(Url)
// return res
// }

// const p = FetchProducts(`https://fakestoreapi.com/products`)
// // console.log(p)

// p.then((data) => {
//     data.json().then((data1)=>{
//         console.log("First Api",data1)
//     })
//         .catch((err)=>{
//             console.log(err)
//    })
// })
// .catch((err)=> {
//     console.log(err)
// })

// Async awit use to perform sideeffect and also solving the chaning proplems

// async function FetchProducts(url){
//     const res1 = await fetch(url)
//     const ans1 = await res1.json();
//     console.log("first Apicalling", ans1)
//     const res2 = await fetch(`${url}/category/${ans1[0].category}`)
//     const ans2 = await res2.json();
//     console.log("Second Apicalling", ans2)
//     const res3 = await fetch(`${url}/${ans2[0].id}`)
//     const ans3 = await res3.json();
//     console.log("Third Apicalling", ans3)
//     const res4 = await fetch(`${url}/category/${ans3.category}`)
//     const ans4 = await res4.json();
//     console.log("Fourth Apicalling", ans4)

// }

// FetchProducts("https://fakestoreapi.com/products")


// Error handling and Exception Handling:- 

// function addTwoNum(x,y) {
//     try{
//          return x + y;
//     }
//     catch(err) {
//         console.log(err)
//     }
// }

// let m =addTwoNum(90,90)

// console.log(m)


// function addTwoNumber(x,y) {
//     try{
//         if(x === number && y === number){
//             return x + y;
//         }else{
//             throw("x and y should be number")
//         }
//     }catch(e) {
//         console.log(e)
//     }
// }

// addTwoNumber(12,'j')

// // Execution Context



const p = FetchProducts("https://fakestoreapi.com/products");

p.then(d => d.json())
    .then(d1 => (console.log("firstApi calling", d1), FetchProducts(`https://fakestoreapi.com/products/category/${d1[0].category}`)))
    .then(r => r.json())
    .then(d2 => (console.log("second Api calling", d2), FetchProducts(`https://fakestoreapi.com/products/${d2[0].id}/`)))
    .then(r => r.json())
    .then(d3 => (console.log("third Api calling", d3), FetchProducts(`https://fakestoreapi.com/products/category/${d3.category}`)))
    .then(r => r.json())
    .then(d4 => console.log("fourth Api calling", d4))
    .catch(err => console.log("error", err));