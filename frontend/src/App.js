import React from 'react';
import { Router, Switch, Route} from 'react-router';
import { createBrowserHistory } from "history";
import './App.css';
import './assets/styles/global.scss';
import Home from './pages/Home.jsx';
import CityPage from './pages/CityPage.jsx';
import ProductDetails from './pages/ProductDetails';
import { Header } from './cmps/Header.jsx';
import {Footer} from './cmps/Footer.jsx';
import EditProduct from './pages/EditProduct.jsx';
import {LoginPage} from './pages/LoginPage.jsx'

const history = createBrowserHistory();

function App() {
  return (
    <div className="App"> 
     <Header/>
      <Router history={history}>
        <Switch>
          <Route path='/edit/:id?' component={EditProduct} exact/>
          <Route path="/:id" component={CityPage} exact/>
          <Route path="/" component={Home} exact/>
          <Route path='/user/:id' component={ProductDetails}/>
          <Route path="/login" component={LoginPage} exact/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
