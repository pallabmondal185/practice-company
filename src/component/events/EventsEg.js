import React from 'react'

const EventsEg = () => {
    return (
        <div>
            {/* <div onMouseDown={(e) => console.log("onDrag", e)}> */}
            {/* <div onMouseOver={(e) => console.log("onmouseover", e)}> */}
            {/* <div onMouseMove={(e) => console.log("onmouseover", e)}> */}
            {/* <div onDrag={(e) => console.log("onmouseover", e)}> */}
            {/* <div onDragStart={(e) => console.log("onmouseover", e)}> */}
            <div onDrag={(e) => console.log("onmouseover", e)}>
                <p>ev 1</p>
                <p>ev 2</p>
                <p>ev 3</p>
                <p>ev 4</p>
                <p>ev 5</p>
                <p>ev 6</p>
                <p>ev 7</p>
            </div>
        </div >
    )
}

export default EventsEg
