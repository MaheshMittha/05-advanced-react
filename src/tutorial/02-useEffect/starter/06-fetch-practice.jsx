import React from 'react'
import { useState, useEffect } from 'react';


const url = 'https://api.github.com/users';

const fetchpractice = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const users = await response.json();
                console.log(users);
                setUsers(users);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    return (
        <section>
            <h3>Github Users</h3>
            <ul className='users'>
            {users.map((user)=>{
                const { id, login , avatar_url,html_url} = user
                return <li key={id}>
                    <div>
                        <h3>{login}</h3>
                        <img src={avatar_url} alt={login}/>
                        <div>{login}</div>
                        <a href={html_url}>Profile</a>
                    </div>
                </li>
            })}
            </ul>
        </section>
    )
}




export default fetchpractice