import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js';
import DinosaurListContainer from './containers/DinosaurListContainer.js';
import PaddockListContainer from './containers/PaddockListContainer'
import SingleDinosaurContainer from './containers/SingleDinosaurContainer.js'
import SinglePaddockContainer from './containers/SinglePaddockContainer.js'
import DinosaurFormContainer from './containers/DinosaurFormContainer.js'
import PaddockFormContainer from './containers/PaddockFormContainer.js'
import DinosaurToPaddockContainer from './containers/DinosaurToPaddockContainer.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <NavBar/>
        <Switch>
        <Route exact path = '/dinosaurs' component = {DinosaurListContainer}/>
        <Route exact path = '/dinosaurs/new' component={DinosaurFormContainer}/>
        <Route exact path = '/paddocks/new' component={PaddockFormContainer}/>
        <Route exact path = '/paddocks/add' component={DinosaurToPaddockContainer} />
        <Route exact path = '/paddocks' component = {PaddockListContainer}/>
        <Route exact path = '/paddocks/:id' render = {(props) =>{
          console.log(props);
          const id = props.match.params.id;
          console.log(id);
          return <SinglePaddockContainer id = {id} />
        }}/>
        <Route exact path = '/dinosaurs/:id' render = {(props) =>{
          const id = props.match.params.id;
          console.log(id)
          return <SingleDinosaurContainer id = {id} />
        }}/>
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
