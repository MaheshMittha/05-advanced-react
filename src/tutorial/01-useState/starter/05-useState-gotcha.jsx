import { useState } from "react";

const UseStateGotcha = () => {
  console.log('rendered');
  const [value, setValue] = useState(0);


  const handleclick = () => {
    setTimeout(() => {
      setValue((currentValue) => {
        return currentValue + 1
      })

    }, 5000)

  }



  return <div>
    <h3>{value}</h3>
    <button type="button" className="btn" onClick={handleclick}>Increment</button>
  </div>
};



export default UseStateGotcha;
