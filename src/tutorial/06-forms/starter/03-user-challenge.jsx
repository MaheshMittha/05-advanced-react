import React, { useState } from 'react'
import {data} from '../../../data'

const UserChallagne = () => {

const [name, setName] = useState(" ")    
const [users, setUsers] = useState(data)    


const handleSubmit = (e)=> {
    e.preventDefault()
    if (!name) return
    const fakeID = Date.now()
    const newUser = {fakeID: fakeID , name: name}
    const updatedUser = [...users, newUser]
    setUsers( updatedUser)
    setName("")
    console.log("form submitted");
}


const removeUser = (id)=>{
    const updatedUser = users.filter((person)=> person.id !== id)
    setUsers(updatedUser)
}


// const removeAll = ()=>{
//     setUsers("")
// }


  return (
    <>
    <div>
      <form className='form' onSubmit={handleSubmit} >
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>


      <h2>User</h2>
      {users.map((user)=>{
        return <div key={user.id} >
            <h4>{user.name}</h4>
            <button className='btn' onClick={()=> removeUser(user.id)} >Remove</button>
        </div>
      })}

{/* <button className='btn' onClick={removeAll} >Remove All</button> */}
 
      </div>

    </>
  )
}

export default UserChallagne