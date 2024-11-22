import React, { useState } from 'react'

const FormData = () => {

const [value , setValue] = useState(0)


const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData (e.currentTarget)
    console.log([...formData.entries()]);
    
  };


  return (

    <div>
        <form action="" onSubmit={handleSubmit} >
            <h4>Form Data API</h4>
            <div>
                <label htmlFor="name" >Name: </label>
                <input type="text"  id='name' name = "name" />
            </div>

            <div>
                <label htmlFor="email" >Email: </label>
                <input type="email"  id='email' name = "email" />
            </div>

            <div>
                <label htmlFor="password" >Password: </label>
                <input type="password"  id='password' name = "password" />
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>
            
        </form>
    </div>

  )
}

export default FormData