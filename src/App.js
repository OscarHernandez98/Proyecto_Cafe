import React from 'react';
import MainContainer from './containers/MainContainer';
import AboutUsContainer from './containers/AboutUsContainer';
import ShopContainer from './containers/ShopContainer';
import FindYourCoffeContainer from './containers/FindYourCoffeContainer';
import BlogCoffe from './containers/BlogCoffe';
import ContactContainer from './containers/ContactContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={MainContainer} />
        <Route exact path="/conocenos" component={AboutUsContainer}/>
        <Route exact path="/tienda" component={ShopContainer}/>
        <Route exact path="/encuentra" component={FindYourCoffeContainer}/>
        <Route exact path="/blog" component={BlogCoffe}/>
        <Route exact path="/contactanos" component={ContactContainer}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
