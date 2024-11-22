import React, { useState } from 'react'

const frameworks = ["React", "Angular", "Vue"];


const OtherInput = () => {
    const [shipping, setShipping] = useState(false);
    const [framework, setFramework] = useState("React")


    const handleShipping = (e) => {
        setShipping(e.target.checked)
    }

    const handleFremework = (e) => {
        setFramework(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");

    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit} >
                <h4>Other Inputs</h4>
                {/* name */}
                <div className='form-row' style={{ textAlign: 'left' }}>
                    <label htmlFor='shipping'> Free Shipping </label>
                    <input type="checkbox" name='shipping' id='shipping' checked={shipping} onChange={handleShipping} />

                </div>
                <div className='form-row' style={{ textAlign: 'left' }}>
                    <label htmlFor='framework' className='form-label'>
                        Framework
                    </label>


                    <select name="framework" id="framework" value={framework} onChange={handleFremework} >
                        {frameworks.map((framework) => {
                            return <option key={framework}>{framework}</option>
                        })}

                    </select>




                </div>
                <button type='submit' className='btn btn-block'>
                    submit
                </button>
            </form>
        </div>

    )
}

export default OtherInput