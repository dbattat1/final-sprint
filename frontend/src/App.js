import React from 'react';
import { Router, Switch, Route} from 'react-router';
import { createBrowserHistory } from "history";
import './App.css';

import Home from './pages/Home.jsx';
import {CityPage} from './pages/CityPage.jsx';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App"> 
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/cityId" component={CityPage} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
