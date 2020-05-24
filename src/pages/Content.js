import React from 'react';

import About from './About';
import Home from './Home';
import Contact from './Contact';
import NotFound from './NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function Content() {
  return (
    <Router>
      <div>
        <div className="Content">          
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default Content;