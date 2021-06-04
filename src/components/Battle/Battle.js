import React, { useEffect, useState } from 'react';
import DisplayWinnerHamster from './DisplayWinnerHamster';
import './Battle.css'
import axios from 'axios';

const Battle = ({ hamsterList, update}) => {
    const [winnerHamsterOne, setWinnerHamsterOne] = useState({});
    const [winnerHamsterTwo, setWinnerHamsterTwo] = useState({});
    const [gameDetailsShow, setGameDetailsShow] = useState(false)

    function RandomHamster() {
        let firstOne = Math.floor(Math.random() * hamsterList.length);

        let secondOne = Math.floor(Math.random() * hamsterList.length);

        if (firstOne === secondOne) {

            secondOne = Math.floor(Math.random() * hamsterList.length);
        }

        setWinnerHamsterOne(hamsterList[firstOne]);
        setWinnerHamsterTwo(hamsterList[secondOne]);
    }

    async function sendUpdateRequests(winnerId, loserId, winnerContain, loserContain) {
        axios.all([
            axios.put(`/hamsters/${winnerId}`, winnerContain),
            axios.put(`/hamsters/${loserId}`, loserContain),
            axios.post("/matches", { winnerId: winnerId, loserId: loserId })
        ])
            .then(axios.spread((obj1, obj2, obj3) => {
                console.log(obj1);
                console.log(obj2);
                console.log(obj3);
            }));
        setGameDetailsShow(true)
    }


    async function updateHamsters(e) {

        
        if (e.target.parentElement.id === "warrior-hamster1") {

            const winnerId = winnerHamsterOne.id
            const loserId = winnerHamsterTwo.id

            const winnerPatch = {
                wins: winnerHamsterOne.wins + 1,
                games: winnerHamsterOne.games + 1
            }
            const loserPatch = {
                defeats: winnerHamsterTwo.defeats + 1,
                games:winnerHamsterTwo.games + 1
            }
            sendUpdateRequests(winnerId, loserId, winnerPatch, loserPatch)
        } else if (e.target.parentElement.id === "warrior-hamster2") {

            const loserId = winnerHamsterOne.id
            const winnerId = winnerHamsterTwo.id

            const winnerPatch = {
                wins:winnerHamsterTwo.wins + 1,
                games: winnerHamsterTwo.games + 1
            }
            const loserPatch = {
                defeats: winnerHamsterOne.defeats + 1,
                games: winnerHamsterOne.games + 1
            }
            sendUpdateRequests(winnerId, loserId, winnerPatch, loserPatch)
        }
    }



    useEffect(()=> {

        function RandomHamster() {

            const firstOne = Math.floor(Math.random() * hamsterList.length);

            let secondOne = Math.floor(Math.random() * hamsterList.length)

            if (firstOne === secondOne) {
                if (firstOne === hamsterList.length) {
                    secondOne -= 1;
                } else if (firstOne === 0) {
                    secondOne += 1;
                }
            }

            setWinnerHamsterOne(hamsterList[firstOne]);
            setWinnerHamsterTwo(hamsterList[secondOne]);
        }

        setGameDetailsShow(false);   
        RandomHamster()
    } ,[hamsterList])
    return (
        <div className = "battle-winner">
            <main>
                <DisplayWinnerHamster compId = "warrior-hamster1" hamster = {winnerHamsterOne} patch={updateHamsters}   showGame={gameDetailsShow}></DisplayWinnerHamster>
                <DisplayWinnerHamster compId = "warrior-hamster2" hamster = {winnerHamsterTwo} patch={updateHamsters}   showGame={gameDetailsShow}></DisplayWinnerHamster>
            </main>

            <button
                onClick={() => {
                    setGameDetailsShow(false);   
                    RandomHamster()
                }}
                id="next-game"
                disabled={!gameDetailsShow}>
                Next Game
                </button>
            
        </div>
    );
};

export default Battle;