// Clouser :- it is combination of lexical scope and simple function
/*
function Outer () {
    let x = 5;
    function inner(){
        x++
        console.log(x)
    }
    return inner
}

let fun = Outer();
// fun()
// fun()
// fun()

// Example 2

function total () {
  let x = 0
  return function () {
  x++
  console.log(x)
  }

}

let ram = total()
let result = total()
let c = total()
c = null
ram()
ram()
ram()
result()
result()
result()

*/

// XHR :- XMLHTTPRequest

function API(Method, URL) {
    const obj1 = new XMLHttpRequest()
    obj1.responseType = "json"; 
    obj1.open(Method, URL)
    obj1.send()
    obj1.addEventListener('load',()=>{
        console.log(obj1.response  )
    })
}

API("GET", "https://jsonplaceholder.typicode.com/posts")