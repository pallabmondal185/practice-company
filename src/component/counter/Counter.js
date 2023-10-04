import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [clickCount, setClickCount] = useState(10);

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
            <button
                onClick={() => {
                    // setInterval(() => {
                    //     setClickCount((prev) => prev - 1)
                    // }, 1000)
                }}
            >
                {/* Click: {clickCount} */}
            </button>
        </div>
    )
}

export default Counter
