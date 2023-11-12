import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


const grid = 4;

// adds style to the each row
const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "#fff",

    // styles we need to apply on draggables
    ...draggableStyle
});

// add style to the each list or column
const getListStyle = isDraggingOver => {
    // console.log("isDraggingOver", isDraggingOver)
    return {
        background: isDraggingOver ? "#e5dfdf" : "lightgrey",
        padding: grid,
        width: 250
    }
};


const CustomDnd = () => {
    const initdata1 = [{
        id: (1 + Date.now() + '' + Math.floor(Math.random() * 100)),
        content: `one`
    },
    {
        id: (1 + Date.now() + '' + Math.floor(Math.random() * 100)),
        content: `two`
    }
    ]

    const initdata2 = [{
        id: (2 + Date.now() + '' + Math.floor(Math.random() * 100)),
        content: `three`
    },
    {
        id: (2 + Date.now() + '' + Math.floor(Math.random() * 100)),
        content: `four`
    }
    ]

    const initdata3 = [{
        id: (+ Date.now() + '' + Math.floor(Math.random() * 100)),
        content: `five`
    },
    {
        id: (2 + Date.now() + '' + Math.floor(Math.random() * 100)),
        content: `six`
    }
    ]

    const [state, setState] = useState([initdata1, initdata2, initdata3]);
    const [newFieldInd, setNewFieldInd] = useState();
    const [newFieldValue, setNewFieldValue] = useState('');
    const [isDeleteList, setIsDeleteList] = useState(false);

    // console.log('stateCust', state);
    // console.log('newFieldInd', newFieldInd)

    // when moves in a single list or column
    const reorder = (list, startIndex, endIndex) => {
        // console.log('list_startIndex_endIndex', list, startIndex, endIndex)
        const result = Array.from(list);
        // console.log('resultreorder', result, list)
        const [removed] = result.splice(startIndex, 1);
        // console.log('removedreorder', removed)
        result.splice(endIndex, 0, removed);

        return result;
    };

    // Moves an item from one list to another list.
    const move = (source, destination, droppableSource, droppableDestination) => {
        // console.log('source_destination', source, destination, droppableSource, droppableDestination)
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        // console.log('droppableSource', droppableSource.droppableId, droppableDestination.droppableId)
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;
        console.log('resultMove', result)
        return result;
    };

    //drag end: this function calles aftert drag end
    const onDragEnd = (result) => {
        const { source, destination } = result;
        // console.log("onDragEndresult", result)
        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;
        // console.log('sInd_dInd', sInd, dInd);

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            // console.log('itemsReorder', items)
            const newState = [...state];
            newState[sInd] = items;

            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            console.log("resultmove", result)
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            // setState(newState.filter(group => group.length));
            setState(newState);
        }
    }

    // adds new fieald in a list
    const handleAddClick = (ind) => {
        // console.log('indxx', ind)
        if (!newFieldValue) {
            return
        }

        let newState = [...state];
        // let newState = Array.from(state);
        let arrInd = newState[ind];
        arrInd.unshift({
            id: (ind + Date.now() + '' + Math.floor(Math.random() * 100)),
            content: newFieldValue
        })
        newState[ind] = arrInd;
        setState(newState);

        setNewFieldInd(null);
        setNewFieldValue('')
    }

    // console.log("praccc", Date.now(), Math.floor(Math.random() * 1000000000))

    return (
        <div className='container mt-5'>

            {/* add / delete buttons */}
            <div>
                <button
                    style={{ margin: '2px 2px', padding: '2px', cursor: 'pointer', backgroundColor: 'green', color: 'white' }}
                    onClick={() => setState(prev => [...prev, []])}
                >
                    Add New List
                </button>
                <button
                    style={{ margin: '2px 2px', padding: '2px', cursor: 'pointer', backgroundColor: '#a50303', color: 'white' }}
                    onClick={() => setIsDeleteList(prev => !prev)}
                >
                    {!isDeleteList ? 'Delete List' : 'Remove Delete'}
                </button>
            </div>

            <div style={{ display: "flex" }}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {state.map((el, ind) => (
                        <div key={ind}>

                            {/* + Add Content button  */}
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div
                                    style={{ cursor: 'pointer', width: '97%', backgroundColor: '#c1c4c7', margin: '0px 3px', padding: '7px 0px', position: 'relative' }}

                                    onClick={() => {
                                        // handleAddClick(ind)
                                        setNewFieldInd(ind + 1)
                                    }
                                    }
                                >
                                    + Add Content
                                </div>
                                {isDeleteList &&
                                    <span
                                        style={{ backgroundColor: '#a50303', color: 'white', cursor: 'pointer', padding: '5px', width: '40px' }}
                                        onClick={() => setState(prev => prev.filter((del, i) => i != ind))}
                                    >
                                        x
                                    </span>
                                }
                            </div>

                            {/* new input field */}
                            {(newFieldInd && newFieldInd == ind + 1) &&
                                <div
                                    style={{ margin: '3px 0' }}
                                >
                                    <input
                                        style={{ backgroundColor: '#fff', width: '200px', border: '2px solid grey', padding: '3px 4px', }}
                                        onChange={(e) => setNewFieldValue(e.target.value)}
                                    />
                                    <button
                                        type='button'
                                        style={{ padding: '3px 2px', cursor: 'pointer', backgroundColor: 'blue', color: 'white' }}
                                        onClick={() => handleAddClick(ind)}
                                    >
                                        save
                                    </button>
                                </div>
                            }

                            {/* dnd starts */}
                            <Droppable key={ind} droppableId={`${ind}`}>
                                {(provided, snapshot) => {
                                    // console.log("provided", provided);
                                    // console.log("snapshot", snapshot);
                                    return (
                                        <div
                                            ref={provided.innerRef}
                                            style={getListStyle(snapshot.isDraggingOver)}
                                            {...provided.droppableProps}
                                        >
                                            {el.map((item, index) => {
                                                console.log("itemdraggable", item)
                                                return (
                                                    <div key={item.id}>
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            display: "flex", justifyContent: "space-between"
                                                                        }}
                                                                    >
                                                                        {item.content}
                                                                        <span
                                                                            style={{ color: '#a50303', cursor: 'pointer' }}
                                                                            onClick={() => {
                                                                                let newState = [...state];
                                                                                newState[ind].splice(index, 1)
                                                                                setState(newState)
                                                                            }}
                                                                        >
                                                                            x
                                                                        </span>

                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    </div>
                                                )
                                            }
                                            )}
                                            {provided.placeholder}
                                        </div>
                                    )
                                }}
                            </Droppable>
                        </div>
                    ))}
                </DragDropContext>
            </div >


        </div >
    )
}

export default CustomDnd
