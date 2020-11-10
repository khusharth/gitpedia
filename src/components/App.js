import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDarkMode } from "../useDarkMode";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import { light as LightTheme, dark as DarkTheme, GlobalStyle } from "../style";

const App = () => {
    // Custom hook for persistent darkmode
    const [theme, setTheme] = useDarkMode();

    return (
        <ThemeProvider
            theme={{
                ...theme,
                setTheme: () => {
                    setTheme((state) =>
                        state.id === "light" ? DarkTheme : LightTheme
                    );
                },
            }}>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/user/:id' component={UserProfile} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
