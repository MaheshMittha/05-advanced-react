import React, { useEffect, useState } from 'react'

const CleanupFunction = () => {

    const [toggle, isSetToggle] = useState(false);

    const DisplayPostToogle = () => {
        useEffect(() => {
            // const insId = setInterval(() => {
            //     console.log("Hello From set interval");
            // }, 1000)

            // return (() => {
            //     clearInterval(insId);
            //     console.log("log from clear interval");
            // })

            const SomeFunc = () => {
                //logic here
            }
            window.addEventListener('scroll', SomeFunc)
            return ()=> window.removeEventListener('scroll', SomeFunc) 

        }, [])

        return <h4>Hello World ! </h4>
    }


    return (
        <div>
            <button className='btn' onClick={() => isSetToggle(!toggle)}>Toggle</button>
            {toggle && <DisplayPostToogle />}
        </div>
    )
}

export default CleanupFunction