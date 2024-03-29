import React, { useEffect, useState } from 'react';

const Notification = ({alert, text}) => {

    const [style, setStyle] = useState({
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "60px",
        gridRow: "2",
        gridColumn: "2",
        backgroundColor: "#ff8ba7",
        zIndex: "20",
        border: "2px solid #33272a",
        marginTop: "3em"
    })
    useEffect(() => {
        const interval = setTimeout(() => {
            alert(false)
            setStyle({
                display: "none",
            })
        }, 2000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div>
             <div className="update-notification" style={style}>
            <span><strong>{text}</strong></span>
        </div> 
        </div>
    );
};

export default Notification;