import React from 'react'
import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users';

const fetchpractice = () => {
    const [users, SetUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            SetUsers(data);
        }
        fetchData();
    }, [])


    return (<section>
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