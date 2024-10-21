import React from 'react'
import { useState } from 'react'

const UserChallange = () => {

    const [user, setUser] = useState(null);

    const login = () => {
        setUser({name: 'Vegan food truck'})
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <>
            {user ?
                <div>
                    <h4>Hello There {user.name}</h4>
                    <button onClick={logout} className='btn' >Logout</button>
                </div> :
                <div>
                    <h4>Please Login</h4>
                    <button onClick={login} className='btn' >Login</button>
                </div>
        
        }
        </>


    )
}

export default UserChallange