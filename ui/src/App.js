import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Register from './pages/register'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Route path='/register' exact component={Register}/> */}
          <Route path='/register' exact component={Register}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
