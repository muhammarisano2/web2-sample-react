import React, { Component } from "react";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      name: "risano",
      message: '',
      messages:[]
    };
    
  }

  handleCouter = ()=> {
      console.log('helo');
    this.setState((state)=>({
        like: state.like + 1
    }));
    // this.setState({
    //     messages: [{sender: 1, message: 'bla'}]
    // })
  }
  render() {
    return (
      <button onClick={this.handleCouter}>
        {this.props.title} {this.state.like}
      </button>
    );
  }
}

export default Button;
