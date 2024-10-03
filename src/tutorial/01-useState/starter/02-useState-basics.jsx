import { useState } from "react";

const UseStateBasics = () => {
const [count , setCount ] = useState(0) 

const handleClick =()=>{
  setCount(count+1)
  // setCount('pants')
}

return (
  <>
  <h4>You Clicked {count} Times </h4>
  <button type="button" className="btn" onClick={handleClick}>Click Me </button>
  </>
)


};

export default UseStateBasics;
