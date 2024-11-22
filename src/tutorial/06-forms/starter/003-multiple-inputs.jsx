import { useState } from 'react'

const MultipleInput= () => {


 const [user , setUsers] = useState({
  name :'',
  email : '',
  password : ''  
 })   


 const handleChange = (e)=>{
 setUsers({...user , [e.target.name] : e.target.value })   
 }


 const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("form submiited successfully");
    setUsers({ email : "" , password : "", name : ""})
    
 }


  return (

    <>
    <div>
        <form action="" onSubmit={handleSubmit} >
            <label htmlFor="name">Name: </label>
            <input type="text" id='name'  value={user.name} onChange={handleChange} name = "name" />  <br />

            <label htmlFor="email">Email:</label>
            <input type="text" id='email' value={user.email} onChange={handleChange} name = "email"  /> <br />
            
            <label htmlFor="password">Password :</label>
            <input type="text" id='password' value={user.password} onChange={handleChange} name = "password" /> <br />

            <button type='submit'>Submit</button>

        </form>
    </div>
    </>
    
     )
}

export default MultipleInput