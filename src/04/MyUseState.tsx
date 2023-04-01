import React, { useState } from 'react';


export const MyUseState = () => {

    let [a, setA] = useState(1);

    const buttonHandler = () => {
        setA(++a);
        console.log(a);
    }
    const buttonHandlerZero = () => {
        setA(0);
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={buttonHandler}>Click Me</button>
            <button onClick={buttonHandlerZero}>0</button>
        </>
    )
}