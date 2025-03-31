import React, {useState, useEffect} from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Counter component rendered");
        // Now I could peform side effects like updating document title
        document.title = `${count}`
    }); // no dependency array means this runs after every render, if I used [], this would run once, if I used [x, y], it would run whenever those variables change.
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter component</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>

    )
}

export default Counter;