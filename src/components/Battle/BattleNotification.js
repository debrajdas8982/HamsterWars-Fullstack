import React, { useEffect, useState } from 'react';

const BattleNotification = ({setForm}) => {

    const [style, setStyle] = useState({
        width: "5em",
        height: "5em",
        borderRadius: "50%",
        color: "#33272a",
        backgroundColor: "#c3f0ca",
        padding: "2em",
        position: "absolute",
        margin: "2em 0 0 300px",
        zIndex: "20",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 500ms"
        })
        const [hurrah] = useState(["Hurrah!","BOOM!", "O la la"])
        useEffect(() => {
            const interval = setTimeout(() => {
                setForm(false)
                setStyle({
                    display: "none",
                })
            }, 1000);
            return () => clearInterval(interval)
        }, [])
        const randomScream = Math.floor(Math.random() * hurrah.length);
        return (
        <div>
             <div className="game-notification" style={style}>
            <h5>{hurrah[randomScream]}</h5>
        </div>
        </div>
    );
};

export default BattleNotification;