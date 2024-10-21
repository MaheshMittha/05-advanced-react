import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h2>{text || "Display Mahesh"}</h2>
      <h2>{!text && 
      (<h2> {name} </h2>)}
      </h2>
      {user && <SomeComponent  name={user.name} />  }

      <h2>Ternary Operator</h2>
      <button className='btn'> {isEditing ? 'edit' : 'add'} </button>
      <h4>{user ? <h2>Hello i am {user.name}</h2>: <h3>Please login with user </h3>}</h4>

     </div>




  )
};


const SomeComponent = ({name})=>{
  return (
    <div>
      <h2>Whaterver returns</h2>
      <h2>{name}</h2>
    </div>
  )

}

export default ShortCircuitExamples;



// Logical OR operation
// true || true; // true
// true || false; // true
// false || true; // true
// false || false; // false


// Logical AND operation
// true && true; // true
// true && false; // false
// false && true; // false
// false && false; // false
