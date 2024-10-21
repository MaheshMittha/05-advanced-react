import React, { useState } from 'react'

const UserChallange = () => {
const [ user, setUser] = useState(null);


const login = ()=>{
    setUser({name: "Mahesh your are loged in"})
}


const logout =()=>{
    setUser(null)
}

  return (
    <div>

        {  user ? 
        <div>
            <h4> {user.name}</h4>
            <button className='btn' onClick={logout} >Logout</button>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam minus tenetur sapiente dignissimos, veniam libero quaerat fugit consectetur alias est ex eius saepe reprehenderit, quod hic ea debitis, esse possimus.</p>
        </div> : 
        <div>
            <h4> Please Login {null}</h4>
            <button className='btn' onClick={login} >Login</button>
        </div>
        }


    </div>
  )
}

export default UserChallange