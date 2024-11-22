import React, { useState } from 'react'
import { data } from '../../../data'

const UserChallange = () => {
    const [name, setName] = useState("");
    const [users, setUser] = useState(data)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return
        const fakeID = Date.now();
        const newUser = { id: fakeID, name: name }
        const updatedUser = [...users, newUser]
        setUser(updatedUser)
        setName("")
        console.log("form submmited");
    }

    const removeUser = (id)=>{
        const newupdatedUser = users.filter((person)=> person.id !== id)
        setUser(newupdatedUser)
    }

    return (
        <>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <h3>Add User</h3>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
                    <button type='submit' id='btn'>Submit</button>
                </form>

                <div>
                    {users.map((user) => {
                        const { name, id } = user;
                        return (
                            <div key={id} >
                                <div>{name}</div>
                                <button type='button' onClick={()=> removeUser(user.id)}>Remove</button>
                            </div>    
                        )
                    })}
                </div>


            </div>
        </>

    )
}

export default UserChallange