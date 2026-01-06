// import { useState } from "react"

//  function App() {

//   const [name, setName] =useState('Gourav');
//   // setName("Hii")
//   function changeName(){
//     setName("Hii")
//   }
//   return (
//     <div>
//       <p>{name}</p>
//       <button onClick={()=>changeName()}>changeName</button>

//     </div>
//   )
// }
// export default App




// ==========================================================================






import { useState } from "react"

function App() {
  // const clgData={
  //   name:"Medicaps",
  //   address:"Indore",
  //   clgType:"Private",
  //   fees:1100000
  // }

  // const [info,setInfo]=useState(clgData)

  const [info, setInfo] = useState({
    name: "Medicaps",
    address: "Indore",
    clgType: "Private",
    fees: 1100000
  })


  function changeCollageInfo() {
    //  setInfo("ips")
    // setInfo({
    //   name: "Ips",
    //   address: "Vijay Nagar",
    //   clgType: "Private++",
    //   fees: 900000
    // })

    // setInfo((prev)=>{
    //   return prev;
    // })

    //  setInfo((prev)=>{
    //   let valu = {...prev, name1: "Ips"};
    //   console.log(valu)
    //   return prev, {name: "Ips"};
    // })

    //    setInfo((prev)=>{
    //   let valu = {...prev, name: "Ips"};
    //   console.log(valu)
    //   return valu;
    // })

      setInfo((prev)=>{
        return {...prev,name:"IPS"}
      })
  }
  return (
    <div>
      <p>Collage Name:<b>{info?.name}</b></p>
      <p>Address:<b>{info?.address}</b></p>
      <p> Collage Type:<b>{info?.clgType}</b></p>
      <p>Fees:<b>{info?.fees}</b></p>
      
      <button onClick={() => changeCollageInfo()}>change collage Details</button>

    </div>
  )
}
export default App


// ==================================================================


// import { useState } from "react"

// function App() {

//   const [name, setName] = useState('Medicaps');
//   const [address, setAddress] = useState('Indore');
//   const [clgType, setclgType] = useState('Private');
//   const [fees, setfees] = useState(1100000);
//   function changeCollageInfo() {
//     setName("IPS ")
//     setAddress("Indore, vijay nagar")
//     setclgType("private ++ ")
//     setfees(9000000)
//   }
//   return (
//     <div>
//       <p>Collage Name:<b>{name}</b></p>
//       <p>Address:<b>{address}</b></p>
//       <p> Collage Type:<b>{clgType}</b></p>
//       <p>Fees:<b>{fees}</b></p>
//       <button onClick={() => changeCollageInfo()}>change collage Details</button>

//     </div>
//   )
// }
// export default App
// 1.node_modules folder ko touch na kare  agar galti se delete ho jaye to 
// npm install se app bna le 

// public folder ke andar na jaye agar jaye to koi code change na kare aap title change kar sakte hai only
// index.html file me jakar ke title tag ke andar

// package.json , package-lock.json, README.md file ko touch na kare

// Pura ka Pura code src folder ke andar karna hai

// Src folder ke andar se
// App.js, index.css vale code ko hta de 
// App.js ke andar ye vala code dal de 
// function App(){
//    return (
//        <div>App</div>
//     )
// }
// export default App;

// App.test.js, App.css, .gitignore, reportWebVitals, setupTests.js, logo.svg  file ko delete kar de

// 7.index.js file me jao  or ye code paste kar do 

// import ReactDOM from 'react-dom/client';

// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <App />

// );


// open the terminal and run the react app via npm start.
// component-> reusable block of code which can use in anywhere in the project.

// state-> current data of component( ui me esa data jo kisi variable se aa rha hai use state bola jata hai);

// react ke andar via default state state less hoti hai bcs ham js ke variable ka use karte hai 

// stateless-> variable kee value change ho jati hai but ui ke upar chnages nhi dikhai dete hai.



//   // state Active-: when ever user perform some action on the UI if changes reflect on the ui i.e example of state active.


// // we make stateless to state active via using react hooks

//   // stateless-: when ever user perform some action on the UI if changes not reflect on the ui i.e example of state less.
//   // js ke variable jo let, const ya var se bante hai vo state less hote hai

//   // event is action which is done by user like click, hover, scroll, load, resize.
//   // react ke andar event on se start hote hai like onClick, onSubmit, onLoad, onResize, on Scroll and so on.


//   // event handler function-> its responsible for executing the functionality what we wanted to perform when an event is trigger

//   // hooks-> hooks is a predefine react function which is used to perform some functionality like
//   // making state less to state active, perform side effects , perform routing and handle form and so on