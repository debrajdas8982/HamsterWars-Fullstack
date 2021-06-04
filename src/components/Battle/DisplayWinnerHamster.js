import React, { useState } from 'react';
import './Battle.css';
import BattleNotification from './BattleNotification';

const DisplayWinnerHamster = ({ hamster, patch, compId, showGame }) => {

    const [formStatus, setFormStatus] = useState(false);

   

    let description;
    if (hamster) {
        description = <div id = {compId} className="display-winner" onClick={(e) => { patch(e); setFormStatus(true);}}>

            {formStatus ? <BattleNotification name={hamster.name} setForm={setFormStatus}></BattleNotification> : (null)}
            <h2>{hamster.name}</h2>
            <img src={`/img/${hamster.imgName}`}
                alt="" 
                onError={(e) => { e.target.onerror = null; e.target.src = `${hamster.imgName}` }}
                />

                {showGame ? <strong>
                <ul className="game-details">
                    <li>No of Matches: {hamster.games}</li>
                    <li>Winner: {hamster.wins}</li>
                    <li>Loser: {hamster.defeats}</li>
                </ul>
            </strong> : <strong>
                <ul className="hamster-details">
                    <li>Age: {hamster.age} year</li>
                    <li>Favorite Food: {hamster.favFood}</li>
                    <li>Loves at: {hamster.loves}</li>
                </ul>
            </strong>}            

        </div>;
    } else {
        description = <div className="display-winner">Loading ....</div>
    }
    return (
        <div>
            {description}
        </div>
    );
};

export default DisplayWinnerHamster;