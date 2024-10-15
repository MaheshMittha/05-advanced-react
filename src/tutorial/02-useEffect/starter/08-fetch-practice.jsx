import React, { useEffect, useState } from 'react'


const url = "https://api.github.com/users";

const fetchpractice = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const users = await response.json();
                console.log(users);
                setUsers(users)
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
                {users.map((user) => {
                    const { id, avatar_url, html_url, login } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h5>{login}</h5>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}


export default fetchpractice