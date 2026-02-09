let user = {
  name : "Malkhan singh",
  age : 28,
  greet : function (){
   console.log("jay shree Ram")
  },
  'is Student': true,
  adress : {
    city : "Indore",
    pincode : 12321,
    state : "MP"
  }
}

// let user = new Object();
// user.name = "Malkhan Singh"
// user.age= 21
// user.adress = {
//   city : "Ujain",
//   pincode : 456221,
//   state : "MP"
// }

// defineProperty in js object working of enumerable,writable,configurable
Object.defineProperty(user , "country",{
  value : "India",
  writable : false
})

Object.defineProperty(user, "age",{
    writable : true,
    enumerable : true,
    configurable : false
})

user.age = 25
delete user.age

//  to show the defineProperty output by getOwnPropertyDescriptor(objectName, keyNmae);

console.log(user.country)
console.log(Object.getOwnPropertyDescriptor(user, "country"))
console.log(Object.getOwnPropertyDescriptor(user, "age"))

console.log(user)

console.log(user.name)
console.log(user['age'])
// console.log(user['100']())
// console.log(user['is Student'])
console.log(user.adress.state)
console.log(user.adress.pincode)
console.log(user.adress.city)

//  JSON.parse(jsonData) and JSON.stringyfy(object) 

let a = JSON.stringify(user);
console.log(a)
console.log(user)
let A = JSON.parse(a);
console.log(A)
 
// freeze and seal method working .

// Object.freeze(user);
// Object.seal(user)
// user.name = "hariom dhakad";
// console.log(user.name)
// delete user.name
// user.name = "Rahul"
// user.school = "loty school ujjain"

console.log(user)


// All javaScript object method uses are as follow:

// 🔹 1️⃣ Object Create / Structure Control

// ✅ Object.create()

// 👉 Naya object banata hai kisi existing object ko prototype bana ke

let student = Object.create(user)
console.log(student.name)
student.greet()
console.log(student.adress.city)

student.name = "bosdike"
console.log(student.name)
console.log(user.name)

student.adress.city="ujjain" 
console.log(student.adress.city)
console.log(user.adress.city)

console.log(student);


// ✅ Object.assign()

// 👉 Copy ya merge objects (shallow copy)


let user = {
  name : "Malkhan singh Dewda",
  age : 21,
  greet : function(){
    console.log("Jay shree Ram")
  },
  adress : {
    city : "indore",
    state: "Mp",
    pincode: 456321
    
  }
}

console.log(user)
// object.create() method create a new empty object
// let malkhan = Object.create(user)
// console.log(malkhan === user)
// malkhan.name="banna";
// malkhan.adress.city="ujjain"
// console.log(malkhan.adress.city)
// console.log(malkhan.name)
// console.log(malkhan)

// object .assign() is use for shallow copy it is use with spread operator or {} empty object
let student = Object.assign(user)  //it can assign direct object not create copy
console.log(user===student) //true

//shallow copy Es5
// let emp = Object.assign({},user)
// console.log(user===emp); //false
// emp.adress.city="ujjain"
// emp.name="ramlal"
// emp.greet()
// console.log(emp)

// shalow copy with spread operator Es6
let star = {...user}  
console.log(user===star)  //false
star.age=89;
star.greet();
star.adress.pincode=423222;
console.log(star)
console.log(user)


// shalow copy in Array
// Array ke case m Array first levele copy hota h baki sare object ko nested level samjhta h is liye original object m bhi chang kr deta h
 let arr = [{name: "hariom sagitra"},user]
 
// let array=[...arr]
// let array = arr.slice()
 let array = Array.from(arr)   //teen tariko se shalow copy hota array of object
 
array[1].name="banna"
console.log(array)
console.log(arr)
console.log(user)