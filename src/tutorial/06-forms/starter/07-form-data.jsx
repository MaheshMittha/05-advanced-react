import React, { useState } from 'react'

const UncontrolledInput = () => {

const [values , setValues] = useState(0)   

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget)
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
    setValues(values+1)
    e.currentTarget.reset()
  }  


    return (

        <div><form action="" onSubmit={handleSubmit}>
            <h4>Form Data API</h4>
            {/* name */}
            <div className='form-row'>
                <label htmlFor='name' className='form-label'>
                    name
                </label>
                <input type='text' className='form-input' id='name' name='name' />
            </div>

            {/* email */}
            <div className='form-row'>
                <label htmlFor='email' className='form-label'>
                    Email
                </label>
                <input type='email' className='form-input' id='email' name='email' />
            </div>
            {/* password */}
            <div className='form-row'>
                <label htmlFor='password' className='form-label'>
                    Password
                </label>
                <input
                    type='password'
                    className='form-input'
                    id='password'
                    name='password'
                />
            </div>
            <button type='submit' className='btn btn-block'>
                submit
            </button>





        </form></div>






    )
}

export default UncontrolledInput