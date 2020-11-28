import React from 'react';



import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './main';

import List from "./header"
import About from './about';
import Veckobrev from './veckobrev';
import Kalender from './kalender'

ReactDOM.render(
  <React.StrictMode>
    
    
    <Router>

    <List />
    
    
    <Switch>
    
    <Route path="/" exact component={App}/>
    <Route path="/Veckobrev" component={Veckobrev}/>
    <Route path="/About" class="content" component={About}/>
    <Route path="/Kalender"  component={Kalender}/>
    <Route path="/index.html"  component={App}/>
    
    
 
    </Switch>


    
    
    </Router>
    

  </React.StrictMode>,
  document.getElementById('root')
);

