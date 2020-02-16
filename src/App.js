import React  from 'react';
import Login from './Login';
import Details from './Backend-data';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path = "/" exact component = {Login}/>
      <Route path = "/new" component = {Details}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
