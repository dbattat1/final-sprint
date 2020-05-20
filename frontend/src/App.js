import React from 'react';
import { Router, Switch, Route} from 'react-router';
import { createBrowserHistory } from "history";
import './App.css';

import Home from './pages/Home.jsx';
import CityPage from './pages/CityPage.jsx';
import ProductDetails from './pages/ProductDetails';
import { Header } from './cmps/Header.jsx';
import {Footer} from './cmps/Footer.jsx';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App"> 
     <Header/>
      <Router history={history}>
        <Switch>
          <Route path="/:id" component={CityPage} exact/>
          <Route path="/" component={Home} exact/>
          <Route path='/user/:id' component={ProductDetails}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
