import React, { useEffect, useState } from 'react';
import DisplayWinnerHamster from './DisplayWinnerHamster';
import './Battle.css'
import axios from 'axios';

const Battle = ({ hamsterList}) => {
    const [winnerHamsterOne, setWinnerHamsterOne] = useState({});
    const [winnerHamsterTwo, setWinnerHamsterTwo] = useState({});

    function RandomHamster() {
        let firstOne = Math.floor(Math.random() * hamsterList.length);

        let secondOne = Math.floor(Math.random() * hamsterList.length);

        if (firstOne === secondOne) {

            secondOne = Math.floor(Math.random() * hamsterList.length);
        }

        setWinnerHamsterOne(hamsterList[firstOne]);
        setWinnerHamsterTwo(hamsterList[secondOne]);
    }

    async function sendUpdateRequests(winnerId, loserId, winnerPatch, loserPatch) {
        axios.all([
            axios.put(`/hamsters/${winnerId}`, winnerPatch),
            axios.put(`/hamsters/${loserId}`, loserPatch),
            axios.post("/matches", { winnerId: winnerId, loserId: loserId })
        ])
            .then(axios.spread((obj1, obj2, obj3) => {
                console.log(obj1);
                console.log(obj2);
                console.log(obj3);
            }));
    }


    async function updateHamsters(e) {

        console.log(e)
        if (e.target.parentElement.id === "warrior-one") {

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
        } else if (e.target.parentElement.id === "warrior-two") {

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
        RandomHamster()
    } ,[])
    return (
        <div className = "battle-winner">
            <main>
                <DisplayWinnerHamster compId = "warrior-one" hamster = {winnerHamsterOne} patch={updateHamsters}></DisplayWinnerHamster>
                <DisplayWinnerHamster compId = "warrior-two" hamster = {winnerHamsterTwo} patch={updateHamsters}></DisplayWinnerHamster>
            </main>
            
        </div>
    );
};

export default Battle;