// import axios from 'axios';
import React from 'react';
import './Battle.css';

const DisplayWinnerHamster = ({ hamster, patch, compId }) => {

  

    let description;
    if (hamster) {
        description = <div id = {compId} className="display-winner" onClick={(e) => patch(e)}>
            <h2>{hamster.name}</h2>
            <img src={`/img/${hamster.imgName}`}
                alt="" />
                <p>Age: {hamster.age}</p>
                <p> Favorite Food: {hamster.favFood}</p>
                <p>Loves: {hamster.loves}</p>
                <p>wins: {hamster.wins} games {hamster.games} defeats {hamster.defeats}</p>
            

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