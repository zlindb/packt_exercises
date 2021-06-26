import React from 'react';

class FieldLength extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: '', isSubmitDisabled:true};

    this.handleSubmit = this.validateFieldLength.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value}, ()=>{
      this.validateFieldLength();
    });
    event.preventDefault();
  }

  validateFieldLength(event){
    if(this.state.value.length <= 100){
      this.setState({isSubmitDisabled: true});
    }
    else{
      //alert('more than 100 chars');
      this.setState({isSubmitDisabled: false});
    }
  }

  submitForm(){
    alert('submit...');
  }

  renderFieldLength(){
    return <p>{`${this.state.value.length} characters`}</p>
  }

  render(){
    return(
      <div className = "blogpost">
        <h1>Blog Post Writer</h1>
        <hr/>
        <p><strong>Write Your Post here</strong></p>
        <p>Must be atleast 100 characters</p>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <br/>
        {this.renderFieldLength()}
        <button disabled={this.state.isSubmitDisabled} onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default FieldLength
