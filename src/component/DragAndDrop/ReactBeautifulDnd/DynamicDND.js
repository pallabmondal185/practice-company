import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`
    }));
// console.log("arrayFrom", getItems(5, 10))

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

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
});

function DynamicDND() {
    const [state, setState] = useState([getItems(10), getItems(5, 10)]);
    // console.log("state", state);



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
            // console.log("resultmove", result)
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState.filter(group => group.length));
        }
    }

    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    setState([...state, []]);
                }}
            >
                Add new group
            </button>

            <button
                type="button"
                onClick={() => {
                    // const arr = state.map((item, i) => {
                    //     if (i === state.length - 1) return [...item, ...getItems(1)];
                    //     else return item;
                    // })
                    // setState(arr);

                    // setState(prev => prev.map((item, i) => {
                    //     if (i === state.length - 1) return [...item, ...getItems(1)];
                    //     else return item;
                    // }))

                    setState([...state, getItems(1)]);
                }}
            >
                Add new item
            </button>

            <div style={{ display: "flex" }}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {state.map((el, ind) => (
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
                                        {el.map((item, index) => (
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
                                                                display: "flex",
                                                                justifyContent: "space-around"
                                                            }}
                                                        >
                                                            {item.content}
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    const newState = [...state];
                                                                    newState[ind].splice(index, 1);
                                                                    setState(
                                                                        newState.filter(group => group.length)
                                                                    );
                                                                }}
                                                            >
                                                                delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )
                            }}
                        </Droppable>
                    ))}
                </DragDropContext>
            </div>
        </div>
    );
}

export default DynamicDND;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<QuoteApp />, rootElement);
