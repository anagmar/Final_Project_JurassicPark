import React, {Component} from 'react';

import Request from '../helpers/request.js';
import PaddockForm from '../components/PaddockForm.js'

class PaddockFormContainer extends Component {
  constructor(props){
      super(props);
      this.state = {dinosaurs: []};
      this.handlePaddockPost = this.handlePaddockPost.bind(this);
    }

    componentDidMount(){
      const request = new Request();
      request.get("/api/dinosaurs").then((data) => {
        this.setState({dinosaurs: data._embedded.dinosaurs})
        console.log("Paddocks dinors", data._embedded.dinosaurs)
      })

    }

  // componentWillReceiveProps(dinosaur) {
  //       console.log(dinosaur);
  //     }

  handlePaddockPost(paddock, dinoId){

    const request = new Request();
    request.post('/api/paddocks', paddock).then(() => {

    })
  }

  render(){
    return(
    <PaddockForm
      dinosaurs = {this.state.dinosaurs}
      handlePaddockPost={this.handlePaddockPost}
      />
    )
  }

}

export default PaddockFormContainer;
