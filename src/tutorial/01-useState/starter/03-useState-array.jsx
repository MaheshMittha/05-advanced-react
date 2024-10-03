
import { useState } from 'react';
import React from 'react';
import { data } from '../../../data';
const UseStateArray = () => {

  const [people, setPeople] = useState(data);

 const removeitem = (id) => {
  // console.log(id);
  const newPeopel = people.filter((person)=> person.id !== id);
  setPeople(newPeopel);

 }

 const clearAllItems = ()=>{
  setPeople([]);
 }





  return (
    <div>
      {people.map((person) => {
        const {id, name} = person;
        return <div key={id}>
          <h4>{name}</h4>
          <button className='btn' type='button' onClick={()=>removeitem(id)} >removeitem</button>
        </div>
      })}

      <button type='button' className='btn' onClick={clearAllItems} style={{marginTop:'2rem'}} >clearAllItems</button>
    </div>
  );
};

export default UseStateArray;
