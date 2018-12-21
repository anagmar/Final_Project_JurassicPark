import React, {Component} from 'react';

import Request from '../helpers/request.js';
import DinosaurToPaddock from '../components/DinosaurToPaddock.js'

class DinosaurToPaddockContainer extends Component {
  constructor(props){
      super(props);
      this.state = {dinosaurs:[]}
      this.state = {paddock: []}
      // this.state = {newDinosaur:[]}
      // this.handleDinosaurPost = this.handleDinosaurPost.bind(this);
    }

    // handleDinosaurPost(dinosaur){
    //   this.setState({newdinosaurs: dinosaur})
    // }

    componentDidMount(){
      const request = new Request();
        request.get("/api/dinosaurs").then((data)=>{
          console.log("this is the studd", data._embedded.dinosaurs);
          this.setState({dinosaurs: data._embedded.dinosaurs})
        })
    }

    // <DinosaurToPaddock
    //   dinosaurs = {this.state.dinosaurs}
    //   paddocks = {this.state.paddock}
    //   handleDinosaurPost={this.handleDinosaurPost}
    //   />
    // <>
    // <DinosaurToPaddock
    //   dinosaurs = {this.state.dinosaurs.name}
    //   handleDinosaurPost={this.handleDinosaurPost}/>
    // </>

  render(){
  
    return(
      'hello!'
    )
  }

}

export default DinosaurToPaddockContainer;
