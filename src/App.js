import React, { Component } from 'react';
// import $ from 'jquery'; 
import classes from  './App.css';

import Home from './pages/Home/Home';
import Budget from './pages/Budget/Budget';
import NotFound from './pages/NotFound/NotFound';
import { Link, Switch, Route } from 'react-router-dom';

//material ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

// const About = () => <h1>About Us</h1>

class App extends Component {
  render() {
    return (
      <div>
        <AppBar className={classes.AppBar}  position="static">
          <Toolbar>
              <Typography  variant="title" color="inherit">
                 Chingu Budget App
              </Typography>
              <div className={classes.menu}>
                <Button className={classes.Btn} variant="contained">
                    <Link className={classes.BtnLink} to="/">Home</Link>
                  </Button>
                  <Button variant="contained">
                    <Link   className={classes.BtnLink}  to="/budget">Budget app</Link>
                  </Button>
                  <Button  variant="contained">
                    <Link  className={classes.BtnLink} to="/about">Not Found</Link>
                  </Button>
                </div>
          </Toolbar>
        </AppBar>
        <div className={classes.App}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/budget" component={Budget} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
