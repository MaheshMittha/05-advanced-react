import React, { useState, createContext } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext = createContext()
// console.log(NavbarContext.Provider);



const Navbar = () => {

  const [user, setUser] = useState({ name: "bob" })

  const logout = () => {
    setUser(null)
  }

  return (
    <NavbarContext.Provider value={{user,logout}}>
      <nav className='navbar' >
        <h4>CONTEXT API</h4>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>



  )
}

export default Navbar