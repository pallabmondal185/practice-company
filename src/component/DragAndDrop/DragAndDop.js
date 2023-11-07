import React, { useState } from 'react'

const DragAndDop = () => {
    const initValue = {
        title: "one",
    }
    const [columnOne, setColumnOne] = useState([initValue, initValue]);
    const [columnTwo, setColumnTwo] = useState([initValue]);
    const [columnThree, setColumnThree] = useState([initValue]);

    return (
        <div className='container mt-5'>

            <div className='row'>

                {/* one */}
                <div className='col-md-4'>
                    {columnOne?.map((item, i) => {
                        return (
                            <div
                                key={i}
                                draggable={true}
                                className="card"
                                onDragStart={() => {
                                    console.log("ddd")

                                }}
                            >
                                <div className="card-body">
                                    {item?.title}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                {/* two */}
                <div className='col-md-4'>
                    {columnTwo.map((item, i) => {
                        return (
                            <div
                                key={i}
                                draggable={true}
                                className="card"
                                onDrag={() => {
                                    console.log("ddd")
                                }}
                            >
                                <div className="card-body">
                                    {item?.title}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                {/* three */}
                <div className='col-md-4'>
                    {columnThree.map((item, i) => {
                        return (
                            <div
                                key={i}
                                draggable={true}
                                className="card"
                                onDrag={() => {
                                    console.log("ddd")
                                }}
                            >
                                <div className="card-body">
                                    {item?.title}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

            </div>

        </div>
    )
}

export default DragAndDop
