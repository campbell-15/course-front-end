import { React, useState, useEffect } from 'react';



const ManualCounter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect ran');
    });

    const incrementClick = () => {
        console.log('incrementClick');
        setCount(count + 1);
    }

    const decrementClick = () => {
        console.log('decrementClick');
        setCount(count - 1);
    }

    return (
        <div>
        {count > 0 ? <h1>Counter is {count}</h1> : <h1>Counter is zero</h1>}
        <button onClick={incrementClick}></button>
        <button onClick={decrementClick}></button>
        </div>
    )
        
    }
    
    export default ManualCounter;