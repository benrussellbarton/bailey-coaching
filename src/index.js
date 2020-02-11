import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bespoke from './bespoke'
import Contact from './contact'
import Training from './training'

const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/bespoke" exact component={Bespoke} />
      <Route path="/training" exact component={Training} />
      <Route path="/contact" exact component={Contact} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
