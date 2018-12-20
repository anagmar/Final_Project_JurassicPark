import React, {Component} from 'react';

import Request from '../helpers/request.js';
import DinosaurForm from '../components/DinosaurForm.js'

class DinosaurFormContainer extends Component {
  constructor(props){
      super(props);
      this.state = {paddocks: []};
      this.handleDinosaurPost = this.handleDinosaurPost.bind(this);
    }

    componentDidMount(){
      const request = new Request();
      request.get("/api/paddocks").then((data) => {
        this.setState({paddocks: data._embedded.paddocks})
        console.log(data._embedded.paddocks)
      })

    }

  componentWillReceiveProps(dinosaur) {
        console.log(dinosaur);
      }

  handleDinosaurPost(dinosaur){
    const request = new Request();
    request.post('/api/dinosaurs', dinosaur)
  }

  render(){
    return(
    <DinosaurForm
      paddocks = {this.state.paddocks}
      handleDinosaurPost={this.handleDinosaurPost}
      />
    )
  }

}

export default DinosaurFormContainer;
