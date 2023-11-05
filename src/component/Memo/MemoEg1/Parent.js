import React, { useEffect, useState } from 'react'
import Child from './Child';
import { useCallback } from 'react';

const Parent = () => {
    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(5);

    console.log("parent");

    const addFunction = () => {
        console.log("inside function");
        return count + 10;
    }

    const addCallback = useCallback(() => {
        console.log("inside callback");
        return count + 3;
    }, [count])


    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}> click</button>
            <Child
                count={count}
                addCallback={addCallback}
            // addFunction={addFunction}
            />

            <div>
                <button onClick={() => setAdd(prev => prev + 5)}>Add</button>
                <p>add parent:{add}</p>
                {/* <p>Parent Function:{addFunction()}</p> */}
                {/* <p>Parent Callback:{addCallback()}</p> */}
            </div>
        </div>
    )
}

export default Parent
