import React from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import './assets/styles/global.scss';
import Home from './pages/Home.jsx';
import CityPage from './pages/CityPage.jsx';
import ProductDetails from './pages/ProductDetails';
import Header from './cmps/Header.jsx';
import { Footer } from './cmps/Footer.jsx';
import EditProduct from './pages/EditProduct.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ProductGallery from './pages/ProductGallery.jsx'
import UserOrders from './pages/UserOrders';

const history = createBrowserHistory();
history.listen((location, action) => {
  window.scrollTo(0, 0)
})
function App() {
  return (
    <div className="App">
      <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      
        {/* <Header /> */}
        <Switch>
          <Route path="/login" component={LoginPage} exact />
          <Route path="/gallery" component={ProductGallery} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path='/order/:id?' component={UserOrders} exact />
          <Route path='/edit/:id?' component={EditProduct} exact />
          <Route path="/:id" component={CityPage} exact />
          <Route path="/" component={Home} exact />
          <Route path='/user/:id' component={ProductDetails} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
