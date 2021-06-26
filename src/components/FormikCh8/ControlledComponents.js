import React, {Component} from 'react';

//controleld component form is what we will be using most the time, when we want to implement forms in react.
//The controlled part comes from the fact that the parent component possesses a reference to the current value that we assign to the input element. That value can be controlled using setState, while managing the state or the value can passed as a prop from the parent component to its children components.
class ControlledComponents extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      password: ''
    }

    this.setNameRef = element =>{
      this.name= element;
    };
    this.setPasswordRef = element =>{
      this.password = element;
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //this is where the control happen...
  //ALthough we can clearly see that controlled components are the way we cn handle forms in React, it turns out that they offer only limted functionality because there is nothing else other than manipulating simple form controls.

  //We just assign the value to the state and we can change it using setState. How we update that state in different scenarios, for example, if we have deal with with complex forms is up to us to configure.

  //If we have to deal with complex form, is up to us to configure and figure out how to perform proper validation or anything more dvanced.
  handleOnNameChange = (e) =>{
    this.setState({name:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('a name was submitted: ' + this.state.name);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} noValidate={true} className="Uncontrolled-Components">
        <h1>Uncontrolled Form</h1>
        <label> Email:
          <input type = 'text' value={this.state.name} onChange={this.handleOnNameChange} />
        </label>
        <label> Password:
          <input type = 'password' ref={this.setPasswordRef} />
        </label>
        <input type="submit" value="login" />
      </form>
    )
  }
}

export default ControlledComponents;
