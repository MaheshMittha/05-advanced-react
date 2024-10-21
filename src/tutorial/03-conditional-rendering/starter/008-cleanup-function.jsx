import React, { useEffect, useState } from 'react'

const CleanupFunction = () => {
    const [toggle, isSetToggle] = useState(false);

    const DisplaySomething = () => {
        useEffect(() => {
            const intid = setInterval(() => {
                console.log("this is from set Inerval");
            }, 1000)

            return () => {
                clearInterval(intid)
                console.log("this from clear interval");
            }
        }, [])
        return <h4 style={{ backgroundColor: 'black', color: 'white' }} >  Hello Mahesh</h4>
    }

    return (
        <div>
            <button className='btn' onClick={() => isSetToggle(!toggle)} >Toggle Component</button>
            {toggle && <DisplaySomething />}
        </div>
    )
}

export default CleanupFunction