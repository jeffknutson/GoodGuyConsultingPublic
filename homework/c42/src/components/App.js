/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { NavLink, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PersonPage from './PersonPage';
import NotFoundPage from './NotFoundPage';

import Sidebar from './Sidebar';

// This is a class-based component because the current version of hot 
// reloading won't hot reload a stateless component at the top-level.

class App extends React.Component {
  render() {

    //todo get data from query to github
    const todoNavItems = [
      { name: 'foo', id: 1 },
      { name: 'bar', id: 3 },
      { name: 'quxx', id: 2 }
    ];

    return (
      <div>
        <header className="row">
          <NavLink to="/">Home</NavLink>
          TODO HEADER GOES HERE
        </header>
        <main className="row">
          <div className="col-md-3">
            <Sidebar navItems={todoNavItems} />
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/person/:id" component={PersonPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
