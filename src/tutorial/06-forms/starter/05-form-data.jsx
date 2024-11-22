import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    {/* Array */ }
    //const formData = new FormData(e.currentTarget)
    console.log([...formData.entries()]);
    setValue(value + 1)
    e.currentTarget.reset();

    {/* Object */ }
    // const newUuser = Object.fromEntries(formData)
    // console.log(newUuser);


    {/* get method single element  */ }
    // const name = formData.get('name')
    // const email = formData.get('email')
    // console.log(name,email);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};
export default UncontrolledInputs;
