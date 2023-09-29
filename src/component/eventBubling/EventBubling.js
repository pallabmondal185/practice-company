import React from 'react';

//event bubling

const EventBubling = () => {
    return (
        <div>
            <div className='div2' onClick={() => {
                console.log("div11")
            }}>
                div1
                <div className='div2' onClick={() => {
                    console.log("div22")
                }}>
                    div2
                    <div className='div3' onClick={(e) => {
                        e.stopPropagation()
                        console.log("div33")
                    }}>
                        div3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventBubling
