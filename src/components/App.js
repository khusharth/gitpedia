import React from "react";
import { GlobalStyle } from "../style";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router history={history}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/user/:id' component={UserProfile} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
