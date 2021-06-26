import React, {Component} from 'react';

class ComponentWillUnMount extends Component{
  constructor(props){
    super(props);
    this.state ={
      list: [
        {id:1, message: 'Hello'},
        {id:2, message: 'Everyeone'},
        {id:3, message: 'What'},
        {id:4, message: 'Is'},
        {id:5, message: 'Up'}
      ]
    };

  }
  removeItem(id){
    const newList = this.state.list.filter(item=> item.id !== id);
    this.setState({list:newList});
  }

  render(){
    return(
    <div className="UnMount">
      <h1> My Item</h1>
      {this.state.list.map(item => (
        <Message key={item.id}
          id={item.id}
          message={item.message}
          removeItem={this.removeItem.bind(this)}
        />
      ))}
    </div>
    )
  }

}

class Message extends Component{

  componentWillUnmount(){
    console.log('Removing Item', this.props);
  }

  render(){
    return (
      <div className="Message">
        <p>{this.props.message} </p>
        <button onClick={()=> this.props.removeItem(this.props.id)}>
          Remove Me
        </button>
      </div>
    )
  }
}

export default ComponentWillUnMount;
