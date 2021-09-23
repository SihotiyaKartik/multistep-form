import './App.css';
import React from 'react'
import Main from './Main';
import ThirdPage from './ThirdPage';
import {Route,Switch} from 'react-router-dom';
import SecondPage from './SecondPage';
function App() {
  return (
    <React.Fragment>
      <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/second' component={SecondPage} />
      <Route path='/third' component={ThirdPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
