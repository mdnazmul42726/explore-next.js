'use client';

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Up</button>
            <button onClick={() => setCounter(counter - 1)}>Down</button>
        </div>
    );
};

export default Counter;