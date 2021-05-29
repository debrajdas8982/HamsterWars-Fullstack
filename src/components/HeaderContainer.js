import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Battle from './Battle/Battle';
import FrontPage from './FrontPage';
import Gallery from './Gallery/Gallery';
import Statistics from './Statistics/Statistics';

const HeaderContainer = ({ hamsterList }) => {
    const linkStyle = {
        marginRight: "2rem",
        textDecoration: "none",
        color: "white",
        fontWeight: "bold"

    };
    return (
        <div className="page-container">
            <Router>
                <nav>
                    <div>
                        <NavLink style={linkStyle} to="/" ><strong>HAMSTER WAR</strong></NavLink>
                    </div>
                    <div className="nav-links">
                        <NavLink style={linkStyle} to="/battle">Battle</NavLink>

                        <NavLink style={linkStyle} to="/gallery">Gallery</NavLink>

                        <NavLink style={linkStyle} to="/statistics">Statistics</NavLink>

                        <NavLink style={linkStyle} to="/history" >History</NavLink>
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