import React from 'react';

class SimpleForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: []

    }
    //bind this
    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this);
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
  }

  // state = {
  //   username: '',
  //   password: '',
  //   passwordConfirmation: '',
  //   email: '',
  //   errors: []
  // }

  //---- Alternative Class declaration to avoid binds---
  //define using arrow, advantage is that it has `this` is
  //bounded appropriately
  // validateUsernameOnBlur = (event)=>{
  //   //console.log('validate whatever', event.target.value);
  //   const username = event.target.value;
  //   const errors = this.state.errors;
  //   errors.push(this.validateNotEmpty("Username", username));
  //
  //   this.setState({username, errors});
  // }

  validatePasswordOnBlur(event){
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Password", password));
    this.setState({password, errors})
    
  }

  validateUsernameOnBlur(event){
    const username = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Username", username));
    this.setState({username, errors});

  }

  validateEmailOnBlur(event){
    const email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateEmailFormat("Email", email));
    this.setState({email, errors});

  }
  validateEmailFormat(fieldname,value){
    let[lhs,rhs] = value.split('@');
    lhs = lhs || '';
    rhs = rhs || '';
    if(lhs.length <= 0 || rhs.length <= 0){
      return `${fieldname} must be in a standard email format.`;
    }
  }
  validatePasswordConfirmationOnBlur(event){
    const passwordConfirmation = event.target.value;
    const errors = this.state.errors;
    if(passwordConfirmation !== this.state.password){
      errors.push("Passowrd must match");
    }
    this.setState({passwordConfirmation, errors});
  }

  submitForm(event){
    console.log('submit form');
  }
  displayForm(){
    return (
      <div>
        Username: <input type="text" onBlur={this.validateUsernameOnBlur}/> <br/>
        Password: <input type="text" onBlur={this.validatePasswordOnBlur}/> <br/>
        Password Confirmation: <input type="text" onBlur={this.validatePasswordConfirmationOnBlur}/> <br/>
        Email: <input type="text" onBlur={this.validateEmailOnBlur}/> <br/>
        <br/>
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }

  displayErrors(){
    return(
      <div className="errors">
        {this.state.errors.map((err,i) =>
          <p key={`err-${i}`}>{err}</p>
        )}
      </div>
    )
  }
  validateNotEmpty(fieldName, value){
    if(value.length <= 0){
      return `${fieldName} must be filled out.`;
    }
  }

  render() {
    return (
      <div className="SimpleForm">
          <h1> Simple Form Validation - Create Account </h1>
          {this.displayErrors()}
          <hr/>
          {this.displayForm()}
      </div>
    ) //end return
  }
};

export default SimpleForm;
