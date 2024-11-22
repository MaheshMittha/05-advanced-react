import React from 'react'
import { useState , useEffect, useRef } from 'react'

const UseRefBasics = () => {

const [count , setValue]  = useState(0)   

    
  return (
    <div>
        <label htmlFor="">Count : </label>
        <button type='button'> Value </button> 
    
    </div>
  )
}

export default UseRefBasics