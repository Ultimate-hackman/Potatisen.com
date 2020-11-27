import React from 'react';



import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './main';

import List from "./header"
import About from './about';
import Veckobrev from './veckobrev';


ReactDOM.render(
  <React.StrictMode>
    
    
    <Router>

    <List />
    
    <Switch>
    
    <Route path="/" exact component={App}/>
    <Route path="/Veckobrev" component={Veckobrev}/>
    <Route path="/About" component={About}/>
    
 
    </Switch>

    

    </Router>
    

  </React.StrictMode>,
  document.getElementById('root')
);

