import React, {Component, Fragment} from 'react';
import Paddock from '../components/Paddock.js';
import PaddockDetails from '../components/PaddockDetail.js';

import Request from '../helpers/request.js';

class SinglePaddockContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddock: null}
    this.state = {dinosaurs: []}
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    console.log("hi ana")
    let request = new Request()
    request.get('/paddocks/'+ this.props.id).then((data) => {
      console.log("there will be data",data);
    this.setState({paddock: data})})

  }

  handleDelete(id){
    const request = new Request();
    const url = '/paddocks/' + id;
    request.delete(url).then( () => {
      window.location = '/paddocks'
    })
  }

  handleEdit(id){
      window.location = '/paddocks/edit/' + id
    }

  render(){
    console.log("begining", this.state.paddock)
    console.log("begining dino", this.state.dinosaurs.length)

    if(!this.state.paddock ){
      return null
    }

        // <Paddock dinosaur = {this.state.paddock._embedded.dinosaurs} paddock = {this.state.paddock}/>
        // <PaddockDetails paddock = {this.state.paddock} dinosaurs={this.state.paddock._embedded.dinosaurs}
        // <PaddockDetails paddock = {this.state.paddock} dinosaurs={this.state.dinosaurs}/>

    return (
      <Fragment>
      <div>
        <h1></h1>
        <Paddock paddock = {this.state.paddock}/>
        <PaddockDetails
        paddock = {this.state.paddock}
        dinosaurs = {this.state.dinosaurs}
        handleDelete = {this.handleDelete}
        handleEdit = {this.handleEdit}/>
      </div>
      </Fragment>
    )
}
}

export default SinglePaddockContainer;
