import React from 'react';

import About from './About';
import Home from './Home';
import NotFound from './NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function Content() {
  return (
    <Router>
      <div>
        <div className="Content">          
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default Content;