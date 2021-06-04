
import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderContainer';

function App() {

//   useEffect(() => {
//     async function getHamsters() {
//         const response = await fetch("/hamsters", { method: "GET" });
//         const data = await response.json();
//         setHamsters(data);
//     }

//     getHamsters();
// }, [update]);

// const [hamsters, setHamsters] = useState([]);
// const [update, setUpdate] = useState("")

return (
    <div className="App">
        <HeaderContainer  />
    </div>
);
}

export default App;
