'use client';

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p className="text-red-800">Count: {counter}</p>
            <button className="bg-red-800 p-4" onClick={() => setCounter(counter + 1)}>Up</button>
            <button onClick={() => setCounter(counter - 1)}>Down</button>
        </div>
    );
};

export default Counter;