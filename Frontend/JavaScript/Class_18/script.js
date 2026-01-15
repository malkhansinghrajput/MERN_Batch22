
let arr = [1,2,3,4,5,6,7] [3]
console.log(arr)
//4
// foo();
var foo = function(){
  console.log("Hi");
}
console.log(foo)

console.log(typeof([]+[]))
 console.log(typeof(typeof(typeof(typeof(undefined)))))

 console.log(typeof({} + []))
 console.log(typeof([] + {}))

 let c = [1,2];
let b = [...c];
b.push(3);
console.log(c);


console.log([1,2,3,4]==[1,2,3,4])

const user = {name:"A"};
user.name = "B";
console.log(user);

let json = '{"a":1}';
let obj = JSON.parse(json);
console.log(typeof obj); //object

let obj1 = {
  x:10,
  getX(){
    console.log(this.x);
  }
}
obj1.getX();  //10

function outer(){
  let x = 10;
  return function inner(){
    console.log(x);
  }
}
let fn = outer();
console.log(fn())  //44  undefine
fn();

// for(var i=0;i<3;i++){
//   setTimeout(()=>console.log(i),1000);  // 333
// }

// for(let i=0;i<3;i++){
//   setTimeout(()=>console.log(i),1000);  //0 1 2
// }

console.log(typeof NaN); //number

console.log(0.1 + 0.2 == 0.3); //false

console.log(null == undefined); //true
console.log(null === undefined);//false

console.log(typeof(null == undefined)); //bolean
console.log(typeof(null === undefined));

console.log(typeof(typeof(typeof(null)))) //string

console.log(typeof(typeof(undefined)))  //string
console.log(typeof(undefined))  //undefined

console.log(typeof typeof 100); //string
console.log(typeof 100)   //number

console.log([] != ![]);  //false

console.log([] == ! [])  //true

let a = 10;
(function(){
  console.log(a);
  var a = 20;
})();  //undefine

// console.log(this)

console.log(typeof null)











