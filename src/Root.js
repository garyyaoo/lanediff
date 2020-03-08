import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './pages/Home';

class Root extends Component {
  render () {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
  );}
}

export default connect()(Root);
