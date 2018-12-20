import React, {Component} from 'react';
import DinosaurDetails from '../components/DinosaurDetails.js';

import Request from '../helpers/request.js';

class SingleDinosaurContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaur: null}
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = "/api/dinosaurs/"+ this.props.id + '/?projection=embedDinosaur' ;
    request.get(url).then((data) => {
    this.setState({dinosaur: data})
    console.log("Here is the data", data);

    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/dinosaurs/' + id;
    request.delete(url).then( () => {
      window.location = '/dinosaurs'
    })
  }

  handleEdit(id){
      window.location = '/dinosaurs/edit/' + id
    }



  render(){
    if(!this.state.dinosaur){
      return null;
    }

    return (
      <div className = "component">
      <h1>{this.state.dinosaur.name}</h1>
      <DinosaurDetails
                        dinosaur = {this.state.dinosaur}
                        species = {this.state.dinosaur.species}
                        diet = {this.state.dinosaur.diet}
                        paddocks = {this.state.dinosaur._embedded.paddock}
                        handleDelete = {this.handleDelete}
                        handleEdit = {this.handleEdit}
                        />

      </div>
    )

  }
}

export default SingleDinosaurContainer;
