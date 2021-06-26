import React from 'react';

//Like HOCs, render props help us reuse the code between components and help us avoid repeating the same code. On the other hand, unlike HOCs, which take a component and return an updated component, render props take a function and return a REact element.
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

  //like HOC REnder Props help resuse the code between the components AnimalDetails
  //help avoid repeating the same code. Unlike HOCs, which take a
  //component and return  an UPDATED COMPONENT, render props takes
  //a function and return a React element.
  return(
    <div>
      {props.children}
      <ul>
        {details.map((detail,index) =>(
          <WrapperComponent key={index} donationAmount={detail.donation}
          render={({donationColor})}=>(
            <AnimalDetails
              donationColor={donationColor}
              image={<Photo path={detail.photo} title={detail.name} />}
              detail={detail}
              key={index}
            />
          )}/>
        ))}
      </ul>
    </div>
  );
}

  class WrappedComponent extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        donationColor: 'black'
      }
    }
    componentDidMount(){
      const donationAmount = this.props.donationAmount;
      const donationColor = donationAmount >50 ? 'green' : 'red';
      this.setState({donationColor});
    }
    render(){
      return this.props.render({
        donationColor: this.state.donationColor
      });
    }
  }

// class Animal extends React.Component{
//   render(){
//     //const {name, number, endangered} = this.props.details;
//     const details = this.props.details;
//     const listDetails = details.map((detail,index)=>(
//       <li key = {index}>
//         <div>
//           <p>Animals: {detail.name}</p>
//           <p>Number: {detail.number}</p>
//           <p>Endagered: {detail.endagered ? 'Yes' : 'No'}</p>
//         </div>
//       </li>
//     ));
//
//     return (
//       <div>
//         {this.props.children}
//         <ul>{listDetails}</ul>
//       </div>
//     )
//   }
// }

export default ComponentCommunication;
