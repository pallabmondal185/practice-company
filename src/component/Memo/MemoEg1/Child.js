import React from 'react'

const Child = ({ count, addFunction, addCallback }) => {
    console.log("child");
    return (
        <div>
            <p>count child: {count}</p>
            {/* <p>count function: {addFunction()}</p> */}
            <p>count Callback: {addCallback()}</p>
        </div>
    )
}

export default React.memo(Child);
// export default Child;

