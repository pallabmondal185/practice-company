import React, { useEffect, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(5);

    console.log("parent");


    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}> click</button>
            <Child count={count} />

            <div>
                <button onClick={() => setAdd(prev => prev + 5)}>Add</button>
                add parent:{add}
            </div>
        </div>
    )
}

export default Parent
