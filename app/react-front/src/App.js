import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserStatistics from './UserStatistics';
import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';
import User from './User';
import MainPage from './MainPage';
import Header from './Header';
import Footer from './Footer';

function App() {

  return (
    <>
    <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/user' component={UserStatistics} />
        <Route exact path='/user/:id' component={User} />
      </Switch>
    <Footer />
    </>
  );
}

export default App;