import React, { Component } from "react";
import Button from "../../components/base/ButtonV2";
import {withRouter} from '../../HOC/withRouter'
class Latihan extends Component {
  constructor(props) {
    console.log("constructor di jalankan");
    super(props);
    this.state = {
      name: "risano",
    };
  }
  componentDidMount() {
    console.log("componentDidMount dijalankan");
  }
  componentDidUpdate(){
      console.log('componentDidUpdate dijalankan');
  }
  componentWillUnmount(){
      console.log('componentWillUnmount dijalankan');
  }
  render() {
    console.log("render dijalankan");
    return (
      <div>
        <h1>page latihan</h1>
        <p>nama saya : {this.state.name}</p>
        <button onClick={()=>this.setState({name: 'akbar'})}>onclik</button>
        <button onClick={()=>this.props.navigate('/home')}>home</button>
      </div>
    );
  }
}

export default withRouter(Latihan);
