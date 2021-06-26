import React from 'react';

//Passing data from a child to a parent component
class BetweenComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      details: [
        {
          id:1,
          name:'Tiger',
          number: 3890,
          endangered: true,
          photo: 'https://source.unsplash.com/gRB4Euk4BYQ/200x100',
          donation:100
        },
        {
          id:2,
          name:'Brown Bear',
          number: 200000,
          endangered: false,
          photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100',
          donation:10
        },
        {
          id:3,
          name:'Red Panda',
          number: 10000,
          endangered: true,
          photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100',
          donation:20
        }
      ]
    }

  }

  //passing data from child to parent
  removeList(id){
    this.setState((prevState) =>{
      const list = prevState.details.filter((item) => item.id !== id);
      return { ...prevState, details: list};
    })
  }

  addList(details){
    this.setState(prevState =>{
      const newId = prevState.details.length+1;
      const newDetails = { ...details, id: newId};
      return { ...prevState, details:[...prevState.details,
        newDetails]
      };
    });
  }

  render(){
      return (
        <React.Fragment>
          {/*Pass removedList function through props to Animal*/}
          <Animal details={this.state.details} removeList={this.removeList.bind(this)}>
            <h1>Endangered Animals </h1>
          </Animal>
          <AnimalForm addList = {this.addList.bind(this)} />
        </React.Fragment>
      )
  }
}
//Passing Data between Component at any levels
//We will pass the addList callback as a prop and pass a value from one component to the other
class AnimalForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      number:0,
      endangered: false,
      photo: '',
      donation:0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    const inputTarget = event.target;
    const inputValue = this.getInputValue(inputTarget);
    const inputName = inputTarget.name;

    this.setState({[inputName]: inputValue});
  }
  handleSubmit(event){
    event.preventDefault();

    //get the addList prop here which involed the addFunction in Parent Component
    this.props.addList(this.state);
  }

  getInputValue(target){
    if(target.type==='radio' && target.value ==='yes'){
      return true;
    }
    else if(target.type === 'radio' && target.value==='no'){
      return false;
    }
    return target.value;
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add new Animal details</h2>
        <label>
           <div className='title'>Name:</div>{' '}
           <input type='text' name='name' onChange={this.handleChange} />
         </label>
         <label>
           <div className='title'>Number:</div>{' '}
           <input type='number' name='number' onChange={this.handleChange} />
         </label>
         <div>
           <div className='title'>Endangered:</div>
           <label>
             <input
               type='radio'
               name='endangered'
               value='true'
               onChange={this.handleChange}
             />{' '}
             Yes
           </label>
           <label>
             <input
               type='radio'
               name='endangered'
               value='false'
               onChange={this.handleChange}
             />{' '}
             No
           </label>
         </div>
         <label>
           <div className='title'>Photo:</div>{' '}
           <input type='text' name='photo' onChange={this.handleChange} />
         </label>
         <label>
           <div className='title'>Donation:</div> $
           <input type='number' name='donation' onChange={this.handleChange} />
         </label>
         <div>
           <button>Add to the list</button>
         </div>
      </form>
    )
  }
}

const AnimalDetails = props =>{
  const {id, name, number, endangered, donation} = props.detail;
  return(
    <li key={id}>
        <p>{props.image}</p>
        <p>Animals: {name}</p>
        <p>Number: {number}</p>
        <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
        <p style={{ color:props.donationColor }}>Donation amount: ${donation}</p>
        <button onClick={()=>props.removeList(id)}>
          Remove from list
        </button>
    </li>
  )
}

//passing props to animal
const Photo = props =>{
  return <img src={props.path} alt={props.name} />
}


const Animal = props =>{
  const details = props.details;
  //like HOC REnder Props help resuse the code between the components AnimalDetails
  //help avoid repeating the same code. Unlike HOCs, which take a
  //component and return  an UPDATED COMPONENT, render props takes
  //a function and return a React element.
  return(
    <div>
      {props.children}
      <ul className='list'>
        {details.map((detail,index) =>(
          <WrappedComponent
            key={index}
            image={<Photo path={detail.photo} title={detail.name} />}
            detail={detail}
            index={index}
            removeList={props.removeList}
          />
        ))}
      </ul>
    </div>
  );
}

const WrappedComponent = withDonationColor(AnimalDetails);
const withDonationColor = (WrappedComponent) =>{
  return class extends React.Component{
    constructor(props){
      super(props);
      this.state ={ donationColor: 'black'};
    }

    componentDidMount(){
      const donationAmount = this.props.detail.donation;
      const donationColor = donationAmount > 51 ? 'green': 'red';
      this.setState({donationColor});
    }
    render(){
      return (
        <WrappedComponent {...this.props} donationColor={this.state.donationColor} />
      );
    }
  }
}



export default BetweenComponent;
