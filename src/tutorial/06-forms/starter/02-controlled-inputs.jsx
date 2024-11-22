import React from 'react'
import { useState } from 'react'

const ControlledInput = () => {

const [name, setName] = useState ("")    
const [email, setEmail] = useState ("")    


const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(name, email);
    console.log("form submitted");    
}


  return (
    <form className="form"  onSubmit={handleSubmit} >
    <h4>Contolled Input</h4>
    <div className="form-row">
      <label htmlFor="name" className="form-label" >name</label>
      <input type="text" name="" id="name" className="form-input" value={name} onChange={(e)=>setName(e.target.value)}  />
    </div>

    <div className="form-row">
      <label htmlFor="email" className="form-label" >email</label>
      <input type="text" name="" id="email" className="form-input" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <button type="submit" className="btn btn-block" >Submit</button>
  </form>

  )
}

export default ControlledInput