import React, { useState } from 'react'

const MultipleInputes = () => {

const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
})


const handleChange = (e)=>{
    setUser({...user , [e.target.name] : e.target.value })
}


const handlesubmit =(e)=>{
    e.preventDefault();
    console.log("Form Submitted");
    setUser({ email : "" , password : "", name : ""})


}




  return (
    <>
    <form action="" onSubmit={handlesubmit} >
        <h3>SignupForm</h3>
        <label htmlFor="name">Name : </label>
        <input type="text" id='name' value={user.name} name='name' onChange={handleChange}/> <br />
        <label htmlFor="email">Email: </label>
        <input type="text" id='email' value={user.email} name='email' onChange={handleChange} /> <br />
        <label htmlFor="password">Password: </label>
        <input type="text" id='password' value={user.password} name='password' onChange={handleChange} />  <br />
        <label htmlFor="confirmpassword">Confirm Password: </label>
        <input type="text" id='confirmpassword' value={user.confirmPassword} name='confirmPassword' onSubmit={handleChange}/> <br />
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default MultipleInputes