import React, { useEffect, useState } from 'react'

const CleanupFunction = () => {
    const [toggle, iseSetToggle] = useState(false);

    console.log("render");
    

    const RandomComponent = () => {
        useEffect(() => {
            // console.log('hmm this is intresting...');
        const intid = setInterval(()=>{
            // console.log("hello from interval");
        },1000) 

        return ()=>{
            clearInterval(intid)
            console.log("cleanup ");
        }
        }, []);
        return <h2>Hello There</h2>
    }

    return (
        <div>
             <h3>Cleanup Function Functionality</h3>
            <button className='btn' onClick={() => iseSetToggle(!toggle)}>Toggle Component </button>
            {toggle && <RandomComponent />}
        </div>
    )




}

export default CleanupFunction