import React, { useState } from 'react'
import data from './data'

const loremipsum = () => {

    const [count, setCount] = useState(1)
    const [text, setText] = useState(data)

    const handleChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        let amount = parseInt(count)
        setText(data.slice(0, amount));
    }

    return (

        <div>
            <form action="" onSubmit={handleChange}>
                <h4>Tired Of Boring Lorem Ipusm ?</h4>
                <label htmlFor="Paragraphs">Paragraphs : </label>
                <input type="number" name="amount" id="amount" min="1" step="1" max="8" value={count} onChange={(e) => setCount(e.target.value)} />
                <button type='submit'> Generate </button>
            </form>

            <article>
                {text.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </article>
        </div>



    )
}

export default loremipsum