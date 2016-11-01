import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import Main from './components/Auth/main.jsx';
import App from './components/App.jsx';

import SignIn from './components/Auth/signIn.jsx';
import SignUp from './components/Auth/signUp.jsx';

import StartTrip from './components/startTrip/startTrip.jsx';
import TripDetailsMaker from './components/TripDetailsMaker/tripDetailsMaker.jsx';
import GearMaker from './components/gearList/gearMakerView.jsx';

import TermsMaker from './components/Terms/termsMaker.jsx'
import TermsUser from './components/Terms/termsUser.jsx'

import TripDetailsUser from './components/tripDetailsUser/tripDetailsUser.jsx';
import ShoppingList from './components/shoppingList/shoppingList.jsx';
import $ from 'jquery';

ReactDOM.render((
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="SignIn" component={SignIn}/>
        <Route path="Main" component={Main}/>
        <Route path="SignUp" component={SignUp}/>
        <Route path="StartTrip" component={StartTrip}/>
        <Route path="TripDetailsMaker" component={TripDetailsMaker}/>
        <Route path="GearMaker" component={GearMaker}/>
        <Route path="termsmaker" component={TermsMaker}/>
        <Route path="TermsUser" component={TermsUser}/>
        <Route path="TripDetailsUser" component={TripDetailsUser}/>
        <Route path="ShoppingList" component={ShoppingList}/>
      </Route>
    </Router>
  </div>
  ), document.getElementById('app'))