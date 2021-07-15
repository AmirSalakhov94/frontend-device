import React, {createContext, useContext} from 'react';
import LeafletMap from "./components/LeafletMap";
import {BrowserRouter, Redirect, Route, Switch, useLocation} from 'react-router-dom';
import Login from "./components/Login";

const App:React.FC = () => {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/map">
                        <LeafletMap/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
