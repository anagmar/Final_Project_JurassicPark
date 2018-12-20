import React, {Component} from 'react';
import Paddock from '../components/Paddock.js';
import PaddockDetails from '../components/PaddockDetail.js';

import Request from '../helpers/request.js';

class SinglePaddockContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddock: null}
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    console.log("hi ana")
    let request = new Request()
    const urls = '/api/paddocks/'+ this.props.id + '/?projection=embedPaddock';
    request.get(urls).then((data) => {
    this.setState({paddock: data})
    console.log("Here is the Single Paddock Data", data)
    })
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
    if(!this.state.paddock){
      return null
    } else if (this.state.paddock.dinosaurs.length()==0)
        {
        return "No Dinos"

        }




    return (
      <div>
        <h1>{this.state.paddock.name}</h1>
      <PaddockDetails paddock = {this.state.paddock} dinosaurs={this.state.paddock._embedded.dinosaurs}
      />
      </div>
    )

  }
}

export default SinglePaddockContainer;
