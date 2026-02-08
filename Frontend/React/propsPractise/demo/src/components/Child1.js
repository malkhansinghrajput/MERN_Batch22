// import React from 'react'
// import Child2 from './Child2'

//  function Child1({props}) {
//   return (
//     <div>
//         <h1>Child1</h1>
//         <Child2 props ={props}/>
//     </div>
//   )
// }
// export default Child1


// props lifting

// import React from 'react'


//  function Child1({count}) {
//   return (
//     <div>
//         <h1>Child1</h1>
//       <h1>Count : {count}</h1>
//     </div>
//   )
// }
// export default Child1




 function Child1({children}) {
    console.log(typeof(children))
  return (
    <div>
        <h1>Child1</h1>
      {children}
    </div>
  )
}
export default Child1