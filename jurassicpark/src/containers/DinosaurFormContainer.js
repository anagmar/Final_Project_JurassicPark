import React, {Component} from 'react';

import Request from '../helpers/request.js';
import DinosaurForm from '../components/DinosaurForm.js'

class DinosaurFormContainer extends Component {
  constructor(props){
      super(props);
      this.state = { dinosaurs:[]};
      this.handleDinosaurPost = this.handleDinosaurPost.bind(this);
    }

    componentDidMount(){
      const request = new Request();
        request.get("/api/dinosaurs").then((data)=>{
          this.setState({dinosaurs:data._embedded.dinosaurs})
        })

    }

  componentWillReceiveProps(dinosaur) {
        console.log(dinosaur);
      }

  handleDinosaurPost(dinosaur){
    const request = new Request();
    request.post('/api/dinosaurs', dinosaur).then(() => {
      window.location = '/dinosaurs'
    })

  }

  render(){
    return(
    <DinosaurForm
      paddocks = {this.state.paddocks}
      handleDinosaurPost={this.handleDinosaurPost}
      dinosaurs = {this.state.dinosaurs}
      />
    )
  }

}

export default DinosaurFormContainer;
