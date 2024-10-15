import React, { useDeferredValue, useEffect, useState } from 'react'


const url = 'https://api.github.com/users';

const fetchingpractice = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchingUsers = async () => {
      const response = await fetch(url);
      const users = await response.json();
      console.log(users);
      setUsers(users);
    }
    fetchingUsers();
  }, [])


  return (
    <section>
      <h3>Github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <div>{login}</div>
                <a href={html_url}>Profile</a>
              </div>
            </li>

          )

        })}

      </ul>
    </section>


  )
}

export default fetchingpractice;