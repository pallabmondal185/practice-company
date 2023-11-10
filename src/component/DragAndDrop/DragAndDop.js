import React, { useState } from 'react'

const DragAndDop = () => {
    const initValue = {
        title: "one",
    }
    const [columnOne, setColumnOne] = useState([initValue, initValue]);
    const [columnTwo, setColumnTwo] = useState([initValue]);
    const [columnThree, setColumnThree] = useState([initValue]);

    const [draggedElementData, setDraggedElementData] = useState({});
    const [draggedElementIndex, setDraggedElementIndex] = useState("");

    const handleDragStart = (data, ind) => {
        // console.log("itemInd", item, ind)
        // const arr = columnOne.filter((ele, i) => i !== ind);
        // setColumnOne(arr)
        setDraggedElementData(data);
        setDraggedElementIndex(ind)
    }

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
                                style={{ display: `${draggedElementIndex === i ? "none" : ""}` }}
                                onDragStart={() => {
                                    // console.log("ddd")
                                    handleDragStart(item, i);
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
