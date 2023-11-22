import React, { useState } from 'react';
import './adjust.css';

const AdjustableSidebar = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250); // Initial width of the sidebar

    const handleResize = (e) => {
        console.log("movementX", e.movementX)
        if (e.clientX !== 0) {
            const newWidth = e.clientX;
            setSidebarWidth(newWidth);
        }
    };

    return (
        <div>
            <div className="sidebar" style={{ width: sidebarWidth }}>
                <div
                    style={{ left: sidebarWidth }}
                    className="resize-handle" draggable onDrag={(e) => {
                        handleResize(e)
                        console.log("eccondrag", e.clientX, e.clientY)
                    }}
                ></div>
                {/* Content inside the sidebar */}
                <div>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                    <p>Sidebar Content</p>
                </div>
            </div>
        </div>
    )
}

export default AdjustableSidebar;
