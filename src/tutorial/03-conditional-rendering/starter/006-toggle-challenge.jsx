import React, { useState } from 'react'

const ToogleChallenge = () => {
const [showAlert, setShowAlert] = useState(false);

  return (
    <>
    <button className="btn btn-danger" onClick={()=> setShowAlert(!showAlert)} >Toogle</button>
    {  showAlert && <Alert/>   }
    </>
  )
}

const Alert = () =>{
    return <h1 className="alert alert-danger"> Hello World Mahesh</h1>
}


export default ToogleChallenge