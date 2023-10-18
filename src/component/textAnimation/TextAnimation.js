import React, { useEffect, useState } from 'react'

const TextAnimation = () => {
    const name = "welcome to webhibe";
    const name2 = "Created By Pallab";

    const [text, SetText] = useState("");
    const [text2, setText2] = useState("");

    useEffect(() => {

        // repete names
        let flag = 0;
        const time = setInterval(() => {
            if (flag < name.length) {
                // console.log("flagdd", flag)
                SetText(prev => prev + name[flag])
                flag++
            }
            else {
                SetText("")
                flag = -1
            }
        }, 300)

        // repete names
        let flag2 = -1;
        const time2 = setInterval(() => {
            if (flag === name2.length) {
                clearTimeout(time2)
            }
            // console.log("flagdd", flag)
            setText2(prev => prev + name2[flag2])
            flag2++

        }, 300)

    }, [])
    return (
        <div>
            <h1>Text Animation</h1>
            <div>
                {text}
            </div>
            <div>
                {text2}
            </div>
        </div>
    )
}

export default TextAnimation
