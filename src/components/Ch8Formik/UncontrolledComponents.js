import React, {Component} from 'react';

//uncontroleld component form
class UncontrolledComponents extends Component{
  constructor(props){
    super(props);
    this.name=null;
    this.password = null;

    this.setNameRef = element =>{
      this.name= element;
    };
    this.setPasswordRef = element =>{
      this.password = element;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    console.info('A name was submitted: ' + this.name.value);
    console.info('A password was submitted: ' + this.password.value);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} noValidate={true} className="Uncontrolled-Components">
        <h1>Uncontrolled Form</h1>
        <label> Email:
          <input type = 'text' ref = {this.setNameRef} />
        </label>
        <label> Password:
          <input type = 'password' ref={this.setPasswordRef} />
        </label>
        <input type="submit" value="login" />
      </form>
    )
  }
}

export default UncontrolledComponents;
