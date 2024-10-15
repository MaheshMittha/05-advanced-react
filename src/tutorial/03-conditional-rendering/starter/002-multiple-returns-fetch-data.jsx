import React from 'react'
import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson';

const multiplereturnsfetchdata = () => {
    const [user, setUser] = useState(null);
    const [isLoading, SetisLoading] = useState(true);
    const [isError, SetisError] = useState(false);


    // Data Fetching: 
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(url);
                console.log(response);
                if(!response.ok){
                    SetisError(true)
                }
                const user = await response.json();
                setUser(user)
            } catch (error) {
                SetisError(true)
            }
            SetisLoading(false)
        }
        fetchUser();
    }, [])

    // Setting Two Condition loading and Error Handling

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>There was an error...</h2>
    }

    return (
        <div>
            <img style={{ width: '125px', borderRadius: '25px' }}
                src={user.avatar_url} alt={user.name} />
            <h2>{user.name}</h2>
            <h4>Works At: {user.company}</h4>
            <p>{user.bio}</p>
            <h2>{user.location}</h2>
        </div>
    )
}

export default multiplereturnsfetchdata