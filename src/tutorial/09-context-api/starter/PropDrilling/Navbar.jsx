import React, { useState } from 'react'
import NavLinks from './NavLinks'
const Navbar = () => {
 
const [user, setUser] = useState ({name : "bob"})

const logout = ()=>{
    setUser(null)
}    

  return (
    <nav className='navbar' >
        <h4>CONTEXT API</h4>    
        <NavLinks user={user} logout={logout} />    
    </nav>
  )
}

export default Navbar