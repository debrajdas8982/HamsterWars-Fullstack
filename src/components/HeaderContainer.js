import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Battle from './Battle/Battle';
// import Battle1 from './Battle/Battle1';
import FrontPage from './FrontPage';
import Gallery from './Gallery/Gallery';
import Statistics from './Statistics/Statistics';

const HeaderContainer = ({ hamsterList }) => {
   
    return (
        <div className="header-container">
            <Router>
                <nav >
                    <div>
                        <NavLink to="/" className = "box">Hamster War</NavLink>
            
                        <NavLink   className = "box" to="/battle">Battle</NavLink>

                        <NavLink className = "box" to="/gallery">Gallery</NavLink>

                        <NavLink className = "box" to="/statistics">Statistics</NavLink>

                        <NavLink className = "box" to="/history" >History</NavLink>
                    </div>
                </nav>
                <div className="content-container">
                    <Switch>

                        <Route path="/battle">
                            <Battle hamsterList={hamsterList} />
                        </Route>

                        <Route path="/gallery">
                            <Gallery hamsterList={hamsterList} />
                        </Route>
                        <Route path="/statistics">
                            <Statistics />
                        </Route>
                        <Route path="/history">

                        </Route>

                        <Route path="/">
                            <FrontPage />
                        </Route>

                    </Switch>
                </div>

            </Router>
        </div>
    );
};

export default HeaderContainer;