import React, { useState } from 'react'
import { data } from '../../../data'


const UserChallenge = () => {

    const [name, setName] = useState('')
    const [users, setUsers] = useState(data)


    const handleChange = (e) => {
        e.preventDefault()
        if(!name) return
        const fakeId = Date.now()
        const newUser = {id: fakeId , name: name}
        const UpdatedUser = [...users, newUser]
        setUsers(UpdatedUser)
        setName("")
        console.log("form submitted");
    }

    const removeIeam = (id)=>{
    const newUser = users.filter((person)=> person.id !== id)
    setUsers(newUser)
    }


    return (
        <>
            <form action=" " onSubmit={handleChange}>
                <label htmlFor="name"></label>
                Name: <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
                <button type='submit' id='submit'> Submit </button>
            </form>

            {/* Render Data */}

            <h2>Users</h2>
            {users.map((user) => {
                const { id, name } = user
                return <div key={user.id} >
                    <div>{name}</div>
                    <button onClick={()=> removeIeam(user.id)} >Remove</button>
                </div>
            })}

        </>
    )
}

export default UserChallenge