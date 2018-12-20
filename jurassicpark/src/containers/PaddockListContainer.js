import React, {Component} from 'react';
import Request from '../helpers/request.js';
import PaddockList from '../components/PaddockList.js'

class PaddockListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {paddocks:[]}
  }

  componentDidMount(){
    let request = new Request()
    request.get('api/paddocks').then((data)=> {
    this.setState({paddocks: data._embedded.paddocks})
    console.log("Data in PaddockListContainer",data);
    })
  }

  handleNew(id){
      window.location = '/paddocks/new'
    }
  render(){
    return(
      <React.Fragment>
      <PaddockList paddocks = {this.state.paddocks}/>
      <button onClick = {this.handleNew}>New Paddock</button>

      </React.Fragment>
    )
  }
}

export default PaddockListContainer;
