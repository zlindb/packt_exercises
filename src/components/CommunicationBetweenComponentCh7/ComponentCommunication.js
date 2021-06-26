import React from 'react';

class ComponentCommunication extends React.Component{
  render(){
    const details = [
      {
        name:'Tiger',
        number: 3890,
        endangered: true,
        photo: 'https://source.unsplash.com/gRB4Euk4BYQ/200x100',
        donation:100
      },
      {
        name:'Brown Bear',
        number: 200000,
        endangered: false,
        photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100',
        donation:10
      },
      {
        name:'Red Panda',
        number: 10000,
        endangered: true,
        photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100',
        donation:20
      },
    ];

    return (
      <Animal details={details}>
        <h1>Endangered Animals </h1>
      </Animal>

    )
  }
}

const AnimalDetails = props =>{
  const {name, number, endangered, donation} = props.detail;
  return(
    <li>
        <p>{props.image}</p>
        <p>Animals: {name}</p>
        <p>Number: {number}</p>
        <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
        <p style={{ color:props.donationColor }}>Donation amount: ${donation}</p>
    </li>
  )
}

//passing props to animal
const Photo = props =>{
  return <img src={props.path} alt={props.name} />
}

const Animal = props =>{
  const details = props.details;

  return(
    <div>
      {props.children}
      <ul>
        {details.map((detail,index) =>(
          <WrapperComponent image = {<Photo path={detail.photo} title={detail.name} />}
           detail={detail} key={index} />
        ))}
      </ul>
    </div>
  );
}

//HigherOrderComponents is a functino that takes a component and returns
//a new component. A HOC is not a react API, it is a pattern that shares
//Common functionalities. It is actually a function that accepts a component
// as an argument and returns a new component.
const withDonationColor = WrappedComponent =>{
  return class extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        donationColor: 'black'
      }
    }
    componentDidMount(){
      const donationAmount = this.props.detail.donation;
      const donationColor = donationAmount >50 ? 'green' : 'red';
      this.setState({donationColor});
    }
    render(){
      return <WrappedComponent {...this.props} donationColor={this.state.donationColor} />;
    }
  }
}
const WrapperComponent = withDonationColor(AnimalDetails);


export default ComponentCommunication;
