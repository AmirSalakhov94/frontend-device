import React from 'react';
import LeafletMap from "./components/LeafletMap";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App:React.FC = () => {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter basename="/front">
                <Switch>
                    <Route path="/map">
                        <LeafletMap/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
