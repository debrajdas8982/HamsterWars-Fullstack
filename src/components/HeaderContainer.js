import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Battle from './Battle/Battle';
import FrontPage from './FrontPage';
import Gallery from './Gallery/Gallery';


const HeaderContainer = () => {
    const [hamsters, setHamsters] = useState([]);
    const [update, setUpdate] = useState("");

    useEffect(() => {
        async function getHamsters() {
            const response = await fetch("/hamsters", { method: "GET" });
            const data = await response.json();
            setHamsters(data);
        }
    
        getHamsters();
    }, [update]);
    
    
   
    return (
        <div className="header-container">
            <Router>
                <nav >
                    <div>
                        <NavLink to="/" className = "box">Hamster War</NavLink>
            
                        <NavLink   className = "box" to="/battle">Battle</NavLink>

                        <NavLink className = "box" to="/gallery">Gallery</NavLink>

                        {/* <NavLink className = "box" to="/statistics">Statistics</NavLink>

                        <NavLink className = "box" to="/history" >History</NavLink> */}
                    </div>
                </nav>
                <div className="content-container">
                    <Switch>

                        <Route path="/battle">
                            <Battle hamsterList={hamsters} />
                        </Route>

                        <Route path="/gallery">
                            <Gallery hamsterList={hamsters} update = {setUpdate} />
                        </Route>
                        <Route path="/">
                            <FrontPage update = {setUpdate}/>
                        </Route>

                    </Switch>
                </div>

            </Router>
        </div>
    );
};

export default HeaderContainer;