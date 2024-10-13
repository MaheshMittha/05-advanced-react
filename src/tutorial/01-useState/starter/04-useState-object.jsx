import { useState } from 'react';
import React from 'react';

const UseStateObject = () => {

 const [person, setPerson] = useState({
  name: "thomas",
  age:26,
  hobby:" Read books"
 }) 

 const displayName =()=>{
  setPerson({...person, name: "peter", age:28, hobby: "play with code" })
 }


  return (
    <>
    <h3>Name: {person.name}</h3>
    <h3>Age: {person.age}</h3>
    <h3>Enjoys: {person.hobby}</h3>
    <button  className='btn' onClick={displayName}>Show Name</button>
    </>
  )
};

export default UseStateObject;
