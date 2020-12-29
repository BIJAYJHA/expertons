import React,{Component} from 'react'
import logo from './logo.svg';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import {routes} from './config/router';
import Auxiliary from './HOC/Auxiliary';
import MentorTable from './container/MentorTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <BrowserRouter>
      <Switch>
        {routes.map((route)=>route.redirectTo ? <Redirect key={route.path} to={route.redirectTo}/> : <Route key={route.path} exact={true} path={route.path} component={route.component}/>)}
      </Switch>
      </BrowserRouter>
      // <Auxiliary>
      //   <MentorTable/>
      // </Auxiliary>
    );

  }
 
}

export default App;
