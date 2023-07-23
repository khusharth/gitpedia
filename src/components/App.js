import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import { GlobalStyle } from '../style';
import ThemeProviderWrapper from 'src/contexts/ThemeProvider';

const App = () => {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/:id" component={UserProfile} />
        </Switch>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;
