import React, { useRef, useState } from 'react';
import './ModalLongPress.css'

const MouseLongPress = () => {
    const [showModal, setShowModal] = useState(false);
    const timerRef = useRef(null);

    console.log("showModal", showModal)

    // Function to handle long press
    const handleLongPress = () => {
        timerRef.current = setTimeout(() => {
            setShowModal(true);
        }, 1000); // Adjust the time here for the long press duration (in milliseconds)
    };

    // Function to handle releasing the button before long press time
    const handleButtonRelease = () => {
        clearTimeout(timerRef.current);
        setShowModal(false);
    };
    return (
        <div>
            <div className="likeButtonContainer">
                <button
                    className="likeButton"
                    onMouseDown={handleLongPress}
                // onMouseUp={handleButtonRelease}
                // onMouseLeave={handleButtonRelease}
                >
                    Like
                </button>
                {showModal && (
                    <div className="modal">
                        <div className="modalContent">
                            <p>This is the modal content!</p>
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MouseLongPress
