import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Statistics = () => {

   const [winners, setWinners] = useState([])
   const [losers, setLosers] = useState ([])

   useEffect(() => {
    function getStats() {
        axios.all([
            axios.get("/winner"),
            axios.get("/loser"),

        ])
            .then(axios.spread((obj1, obj2) => {
                if (obj1.status !== 200 || obj2.status !== 200) {
                    console.log(obj1, obj2);
                } else {
                    console.log(obj1.data);
                    setWinners(obj1.data);
                    setLosers(obj2.data);
                }
            }));
    }

    getStats();
   }, [])
   

    return (
    <div>
         <div>
            {/* Top 5 vinnare: */}
            <ul>{winners.map((hamster, index) =>
                <li key={hamster.name} style={{
                    listStyleType: "none"}}>
                    {index + 1}
                    <img
                        src={`/img/${hamster.imgName}`}
                        key={hamster.name}
                        hamster={hamster}
                        style={{ borderRadius: "50%", width: "200px" }} alt=""/>
                        vinster: {hamster.wins}
                </li>)}
            </ul>


            Bottom 5 förlorare:
            <ul>{losers.map((hamster, index) =>
                <li key={hamster.name} style={{listStyleType: "none"}}>
                    {index + 1}
                    <img
                        src={`/img/${hamster.imgName}`}
                        key={hamster.name}
                        hamster={hamster}
                        style={{ borderRadius: "50%", width: "200px" }} alt =""/>
                        förluster: {hamster.defeats}
                </li>)}</ul>

        </div>
    </div>
    );
};

export default Statistics;