import React, { useState } from 'react'

const ToggleChallenge = () => {
const [showAlert , setShowAlert] =useState(false);


const Alert = () =>{
  return <h1 style={{backgroundColor: "pink",  margin:"1rem" }} >Hello Mahesh</h1>
}

  return (
    <div>
        <button className='btn' onClick={()=> setShowAlert (!showAlert)}>Toggle Button</button>
        {showAlert && <Alert/>
        }
    </div>
    )
}

export default ToggleChallenge