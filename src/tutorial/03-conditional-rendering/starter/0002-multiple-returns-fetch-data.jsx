import React, { useEffect, useState } from 'react'

const url = "https://api.github.com/users/QuincyLarson";

const multiplereturnsfetchdata = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                console.log(response);

                if (!response.ok) {
                    setisError(true)
                    setisLoading(false)
                }
                const user = await response.json();
                setUser(user);
            } catch (error) {
                setisError(true)
            }
            setisLoading(false)
        }

        fetchData();
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>There was an error...</h2>
    }



    return (
        <div>
            <img style={{ width: '125px', borderRadius: '25px' }}
                src={user.avatar_url}
                alt={user.name} />
            <h2>{user.name}</h2>
            <h3>Wroks At: {user.company}</h3>
            <p>{user.location}</p>
            <div><a href={user.html_url}>GitHub</a></div>
        </div>
    )
}

export default multiplereturnsfetchdata;