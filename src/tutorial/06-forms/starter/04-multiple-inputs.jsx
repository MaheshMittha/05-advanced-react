import React, { useState } from 'react'

const MultipleInput = () => {

    const [users, setUsers] = useState({
        name: "",
        email: "",
        password: "",
    })


    const handleChange = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        setUsers({ ...users, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form successfully submitted");
        setUsers({
            name: "",
            email: "",
            password: "",
        })
    }

    
    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <h4>Multiple Inputs</h4>
                {/* name */}
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        name
                    </label>
                    <input type='text' className='form-input' id='name' value={users.name} onChange={handleChange} name="name" />
                </div>
                {/* email */}
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input type='email' className='form-input' id='email' value={users.email} onChange={handleChange} name="email" />
                </div>
                {/* email */}
                <div className='form-row'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input type='password' className='form-input' id='password' value={users.password} onChange={handleChange} name="password" />
                </div>
                <button type='submit' className='btn btn-block'>
                    submit
                </button> 

                
            </form>
        </div>

    )
}

export default MultipleInput