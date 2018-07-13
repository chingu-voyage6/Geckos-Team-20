import React, { Component } from 'react';
// import $ from 'jquery'; 
import './App.css';

import Home from './pages/Home/Home';
import Budget from './pages/Budget/Budget';
import NotFound from './pages/NotFound/NotFound';
import { Link, Switch, Route } from 'react-router-dom';

//material ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                BudgetApp Application
                </Typography>
                <div className="menu">
                  <Button variant="contained">
                    <Link to="/">Home</Link>
                  </Button>
                  <Button variant="contained">
                    <Link to="/budget">Budget app</Link>
                  </Button>
                  <Button variant="contained">
                    <Link to="*">Not Found</Link>
                  </Button>
                </div>
            </Toolbar>
        </AppBar>
        <div className="app">
        <Switch>
          <Route exact path="/" compontent={Home} />
          <Route path="/budget" compontent={Budget} />
          <Route path="*" compontent={NotFound} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
