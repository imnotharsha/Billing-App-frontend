import React from 'react';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/static/Home';
import Account from './components/static/Account';
import LandingPage from './components/LandingPage/LandingPage';
import CustomersShow from './components/LandingPage/Customers/CustomersShow';
import CustomersForm from './components/LandingPage/Customers/CustomersForm';
import ProductsShow from './components/LandingPage/Products/ProductsShow';
import ProductsForm from './components/LandingPage/Products/ProductsForm';
import BillsShow from './components/LandingPage/Bills/BillsShow';
import BillsForm from './components/LandingPage/Bills/BillsForm';
import Logout from './components/auth/Logout';

function App(props) {
  return (
    <BrowserRouter>
      <Link to='/'>Home </Link>
      {Object.keys(props.user).length !== 0 ? (
        <div>
          <Link to='/landingpage'>Billing Page </Link>
          <Link to='/account'>Account </Link>
          <Link to='/logout'>Logout</Link>
        </div>
      ) : (
        <div>
          <Link to='/users/register'>Register </Link>
          <Link to='/users/login'>Login </Link>
        </div>
      )}
      <Route path='/' component={Home} exact />
      <Route path='/landingpage' component={LandingPage} />
      <Route path='/users/register' component={Register} />
      <Route path='/users/login' component={Login} />
      <Route path='/account' component={Account} />
      <Route path='/customersshow' component={CustomersShow} />
      <Route path='/customersform' component={CustomersForm} />
      <Route path='/productsshow' component={ProductsShow} />
      <Route path='/productsform' component={ProductsForm} />
      <Route path='/billsshow' component={BillsShow} />
      <Route path='/billsform' component={BillsForm} />
      <Route path='/logout' component={Logout} />
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
