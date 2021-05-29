
import React, { useEffect, useState } from 'react';
import './App.css';
import HeaderContainer from './components/HeaderContainer';

function App() {

  useEffect(() => {
    async function getHamsters() {
        const response = await fetch("/hamsters", { method: "GET" });
        const data = await response.json();
        setHamsters(data);
    }

    getHamsters();
}, []);

const [hamsters, setHamsters] = useState([]);

return (
    <div className="App">
        <HeaderContainer hamsterList={hamsters} />
    </div>
);
}

export default App;
