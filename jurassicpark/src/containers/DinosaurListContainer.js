import React, {Component} from 'react';
import Request from '../helpers/request.js';
import DinosaurList from '../components/DinosaurList.js'

class DinosaurListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaurs:[]}
    this.handleNew = this.handleNew.bind(this);
  }

  componentDidMount(){
    let request = new Request()
    request.get('/api/dinosaurs').then((data)=> {
    console.log("here", data);
    this.setState({dinosaurs: data._embedded.dinosaurs})
    })
  }

  handleNew(id){
      window.location = '/dinosaurs/new'
    }

  render(){
    return(
      <React.Fragment>
      <DinosaurList dinosaurs = {this.state.dinosaurs}/>
      <button onClick = {this.handleNew}>New Dinosaur</button>
      </React.Fragment>
    )
  }
}

export default DinosaurListContainer;
