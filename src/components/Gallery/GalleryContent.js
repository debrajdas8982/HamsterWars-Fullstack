import axios from 'axios';
import React, { useState } from 'react';
import WinList from './WinList';

const GalleryContent = ({ hamster, alert, alertMessage}) => {
    const [defeated, setDefeated] = useState([])


    function deleteHamster() {
        axios.delete(`/hamsters/${hamster.id}`)
            .then(response =>{ setAlert(); console.log(response)});
            
    }

    function setAlert() {
        alertMessage(`${hamster.name} Do u want to delete from Database.`)
        alert(true)
    }

    function matchWinners() {
        axios.get(`/matchWinner/${hamster.id}`)
            .then(response => setDefeated(response.data))
    }

    let loserIdList = defeated.map(match => match.loserId)

    let uniqueLoserIdList = [...new Set(loserIdList)];

    return (

        <div
            className="gallery-content">
            <h3>{hamster.name}</h3>
            <img
                src={`/img/${hamster.imgName}`}
                alt=""
                onError={(e) => { e.target.onerror = null; e.target.src = `${hamster.imgName}` }}
            />
            <div className = "hamster-details">
                <div id="text">
                    <ul>
                        <li>Loves : {hamster.loves}</li>
                        <li>{hamster.name} is {hamster.age} years old</li>
                        <li>Favorite Food : {hamster.favFood}</li>
                    </ul>
                </div>
                <div onClick={() => matchWinners()} className="match-winners">
                Has defeated + {uniqueLoserIdList.map(loser => <WinList key={loser} loser={loser} />)}
                </div>

                <div id="erase-btn" >
                    <button onClick={(e) => {e.preventDefault(); deleteHamster()}}>Delete {hamster.name}</button>
                </div>
            </div>

        </div>



        
    );
};

export default GalleryContent;



// const [selectedItem, setSelectedItem] = useState("");

    // function changeSelected() {
    //     if (selectedItem){
    //         setSelectedItem("");
    //     }else{
    //         setSelectedItem(hamster.id);
    //     }
    // }

    // const showDetails = (
    //     <div>
    //         <ul>
    //             <li>Ålder: {hamster.age}</li>
    //             <li>Favoritmat: {hamster.favFood}</li>
    //             <li>Älskar att: {hamster.loves}</li>
    //             <li>wins: {hamster.wins} games {hamster.games} defeats {hamster.defeats}</li>
    //         </ul>
    //     </div>
    // )

    //     <div onMouseEnter={changeSelected} onMouseLeave={changeSelected} className="gallery-item">
        //     {selectedItem ? <div >
        //         <strong>{hamster.name}</strong>
        //     </div> : <img
        //             src={`http://localhost:2000/img/${hamster.imgName}`}
        //         alt="hamster"
        //         height="100px" />}
        //     <div >{selectedItem
        //         ? showDetails 
        //         : <span></span>
        //     }</div>
        // </div>