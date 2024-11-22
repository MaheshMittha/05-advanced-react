import { useEffect, useRef, useState } from 'react';


// To avoid some functionality after that intial render 
// What if I dont want to run certain functionality after initial render



const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const isMounted = useRef(false);
  const refeContainer = useRef(null)


  // useEffect(()=>{
  //   refeContainer.current.focus()    
  // });

  useEffect(()=>{
    if(!isMounted.current) {
      isMounted.current = true
      console.log("Initial Render");
      return
    }
    // You can see that above code in "if" is not running during re-render
    console.log("re-render");
  // Note: Dont check isMounted since it is an object and will always be true
  },[value])


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refeContainer.current.value;
    console.log(name);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input type='text' id='name' className='form-input'  />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
