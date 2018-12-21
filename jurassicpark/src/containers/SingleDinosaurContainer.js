import React, {Component} from 'react';
import DinosaurDetails from '../components/DinosaurDetails.js';

import Request from '../helpers/request.js';

class SingleDinosaurContainer extends Component {
  constructor(props){
    super(props);
    this.state = {dinosaur: null}
    this.state ={feed:'Hungry!'}
    this.handleDelete = this.handleDelete.bind(this)
    this.handleFeed = this.handleFeed.bind(this)
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
    const url = '/dinosaurs/' + this.props.id;
    request.delete(url).then( () => {
      window.location = '/dinosaurs'
    })
  }

  handleEdit(id){
      window.location = '/dinosaurs/edit/' + id
    }

handleFeed(id){
  if(this.state.dinosaur.diet === 'herbivore'){
    this.setState({feed: 'Fed nice Veggies!'})
  }else if(this.state.dinosaur.species === 'velociraptor'){
    this.setState({feed: 'Gave him a chunck of meat!'})
  }else{
    this.setState({feed: 'We gave him that old goat!'})
  }

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
                        handleDelete = {this.handleDelete}
                        handleEdit = {this.handleEdit}
                        feed = {this.state.feed}
                        handleFeed = {this.handleFeed}
                        />

      </div>
    )

  }
}

export default SingleDinosaurContainer;
