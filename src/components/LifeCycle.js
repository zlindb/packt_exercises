import React, {Component} from 'react';

class ComponentDidMount extends Component{
  constructor(props){
    super(props);

    this.state = { messages: [], loading: true };
  }

  componentDidUpdate(prevProps, prevState){
    console.log('prevProps:', prevProps);
    console.log('preState:', prevState);
  }

  componentDidMount(){
    setTimeout(()=> this.setState({
      messages: ["hellp blalbld", "something something"], loading:false
    }), 3000);
  }

  renderProfile(){
    if(this.state.loading){
      return <div>Loading...</div>;
    }
    if(this.state.messages && this.state.messages.length > 0){
      return(
        <div>
        <ul>
          {this.state.messages.map((msg,index) =>
            <li key={`msg-${index}`}>{msg}</li>
          )}
        </ul>
        </div>
      );
    }
    else{
      return (
        <div>No messages!</div>
      )
    }
  }

  render(){
    return (
      <div className="lifecycle">
      <h1>LifeCycle, simulating ajax request </h1>
      <hr/>
      {this.renderProfile()}
      </div>
    )
  }
}


export default ComponentDidMount;
