import { useState } from "react"
import Child from "./Child"
import Child1 from "./Child1"
function Parent () {
    
    //props drilling  :- props drilling is the process in which the data transfer from parant componenet to nested child component.

    // const Name = "Malkhan Singh Dewda"
    // const Address = "Aroliya dewda"

    // props lifting :- props lifting is the process in which the state dhare from nearest child

    const [Count , setCount] = useState(0)
         let name = "malkhan singh"
    return(
        <div>
         {/* <Child count={Count}  setCount= {setCount} />
         <Child1 count={Count}/> */}

         {/* Children props  */}

          <Child>
              <h1>Hii I am {name} </h1>
            <h2>I am From </h2>
            </Child>   

            <Child1>
                  <h1>Hii I am {name}</h1>
             <h2>I am From </h2>
                </Child1>     
        </div>
    )
}
export default Parent