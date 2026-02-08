// import React from 'react'
// import Child1 from './Child1'

// const Child = (props) => {
//   return (
//     <div>
//         <h1>Child</h1>
//         <Child1 props={props}/>
//     </div>
//   )
// }

// export default Child


// props lifting

// import React from 'react'


// const Child = ({count, setCount}) => {
 
//   return (
//     <div>
//         <h1>Child</h1>
//        <h1>count : {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Count</button>
//     </div>
//   )
// }

// export default Child


// children props 


import React from 'react'


const Child = (props) => {
 console.log(typeof(props))
  return (
    <div>
        <h1>Child</h1>
       {props.children}
    </div>
  )
}

export default Child