import React, { useState } from 'react'

const UserChallange = () => {

    const [user, setUser] = useState(null);


    const login = () => {
        setUser({ name: "vegan Food Truck" })
    }

    const logout = () => {
        setUser(null);
    }

    return (

        <div>
            {user ?
            <div>
                <h4> Hello There {user.name}</h4>
                <button className='btn' onClick={logout}>Logout</button>
            </div>
             : 
             <div>
                <h4>Please Login {null}</h4>
                <button className='btn' onClick={login}>Logout</button>
            </div>

             }
        </div>
        
    )
}

export default UserChallange