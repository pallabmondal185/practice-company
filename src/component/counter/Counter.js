import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const time = setInterval(() => {
            setCount((prev) => prev + 1);
            // setCount(count + 1);
        }, 1000);
        // return () => clearInterval(time)
    }, [])

    return (
        <div>
            count: {count}
        </div>
    )
}

export default Counter
