import React, { useCallback, useEffect, useMemo, useState } from 'react'

const UseMemoUseCallback = () => {
    const [addNum, setAddNum] = useState(0);
    const [multiNum, setMultiNum] = useState(1);
    const [newNum, setNewNum] = useState(0);
    console.log("number", addNum)

    // function
    const addNumberFunc = () => {
        console.log("inside function");
        return addNum + 10
    }

    // useCallback
    const addNumberCallback = useCallback(() => {
        console.log("inside useCallBack");
        return addNum + 5
    }, []);

    // const addNumberCallback = useCallback(() => {
    //     console.log("inside useCallBack");
    //     return addNum + 5
    // }, [addNum]);



    // useMemo
    const addNumberMemo = useMemo(() => {
        console.log("inside useMemo");
        return addNum + 3
    }, [addNum]);

    // useEffect
    useEffect(() => {
        console.log("inside useEffect")
        setNewNum(addNum + 5);
        setAddNum(prev => prev + 2)
    }, [setAddNum])

    return (
        <div>
            {/* function */}
            <button onClick={() => setAddNum(prev => prev + 1)}>func add</button>
            <button onClick={() => setMultiNum(prev => prev * 2)}>multi plication</button>
            <p>Original add Number: {addNum}</p>
            <p>Original multi Number: {multiNum}</p>

            <p>Number function: {addNumberFunc()}</p>
            <p>Number callback: {addNumberCallback()}</p>
            <p>Number Memo: {addNumberMemo}</p>
            <p>Number useEffect: {newNum}</p>
        </div>
    )
}

export default UseMemoUseCallback;
