import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/homeComponent";
import Nav from "./Components/navComponents";
import Login from "./Components/loginComponents";
import Register from "./Components/registerComponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css'
import axios from 'axios'


export default class App extends Component {
 state= {};
  componentDidMount= () => {
    
    axios.get('user').then(
        res => {
            this.setState({
                user : res.data
            });
        },
        err => {
            console.log(err)
        } 
    )
}
  return () {
    <BrowserRouter>
    <div className="App">
     <Nav user={this.state.user} />
<div className="auth-wrapper">
<div className="auth-inner">
<Switch>
  <Route exact path="/" component={()=> <Home user={this.state.user} />}/>
  <Route exact path="/login" component= {Login} />
  <Route exact path="/register" component={Register} />
</Switch>

  
</div>
</div>
      </div>
      </BrowserRouter>
  
  }
}


