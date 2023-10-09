import React from 'react'

const Child = ({ count }) => {
    console.log("child");
    return (
        <div>
            count child: {count}
        </div>
    )
}

export default React.memo(Child);
// export default Child;

