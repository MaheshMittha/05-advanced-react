import React from 'react'
import { useState } from 'react'

const UserChallange = () => {
    const [user, setUser] = useState(null);


    const login = () => {
        setUser({ name: "Welcome to Tata Consultancy Services" });
    }


    const logout = () => {
        setUser(null);
    }

    return (
        <div>
            {user ?
                <div>
                    <h4>Hello There {user.name.toUpperCase()}</h4>
                    <button className='btn' onClick={logout}>logout</button>
                </div>
                :
                <div>
                    <h4>Please Login {null}</h4>
                    <button className='btn' onClick={login}>Login</button>
                </div>
            }
        </div>
    )
}

export default UserChallange