import React, {Component} from 'react';

//Example 1 Sending data from a parent component to a direct child
//Component
class SendData extends Component{
  render(){
    return <Animal name = "tiger"/>;
  }
}

//example 2: Receiving data in a child class Component
class Animal extends Component{
  render(){
    return <div> Animal: {this.props.name} </div>;
  }
}

//running the above coder //Animal: Tiger
//IN class-based component, the props can be accessed using this .props
//from a component instance. to receive the name prop values, we can {this.props.name}
//in curly braces, which evaluating the js expression

//Example 3: Receiving data in a child function Component
//this is equvalent to the example above
const Animal = props =>{
  return <div> Animal: {props.name}</div>;
}


class App extends Component{
  render(){
    return <Animal name="tiger" number={3890} endangered={true} />;
  }
}
//example 6: Destructuring prop values in a child class Component
class Animal extends Component{
  render({name,number, endangered} = this.props){
    return (
      <div>
        <p>Animal: {name} </p>
        <p>Number: {number} </p>
        <p>endangered: {endangered ? 'Yes' : 'No'} </p>
      </div>
    )
  }
}
//destructuring in function component
const Animal = ({name, number, endangered}) =>{
  //...
}

//Exercise 7.02: Sending Child elements using the children Prop
class App extends Component{
  render(){
    return (
      <Animal name="tiger" number={3890} endangered={true} >;
        <h1> Endangered Animals</h1>
      </Animal>
    )
  }
}
//to receive the child component h1, add an extra buildin property,children
const Animal = props =>{
    const {name, number, endangered, childnre} = props;
    return (
      <div>
        {children}
        /*...*/
      </div>
    )
}

//Passing Data to a Child Component Multiple Levels down
//There are severals ways we can send data down to such child components:
//-Props: we can keep passing the props down to the child components until the lst child component in the hierarchy.
//-React Context API: The main problem with passing props down to each child components is there could be alot of layers of components in-between the data source and the user. This is called props-drilling. If there are 10 child components inside a parent component, we have to send data to the tenth child component from the parent component.
//With the React Context API, we can provide the data from the parent component and consume it directly from a component on any level without passing it through the other child components.

//----Spliting a Component into Smaller components----
//In this exercise, we're going to separate the Animal Component and move the animal details to the AnimalDetails component
const AnimalDetails = props =>{
  //destructuring
  const {name, number, endangered} = props.detail;
  return (
    <li key={props.key}>
      <div>
        <p>Animal: {detail.name} </p>
        //..
      </div>
    </li>
  )
}

const Animal = props=>{
  const details = props.details;
  return(
    <div>
      {props.children}
      <ul>
        {details.map((detail,index) =>(
          <AnimalDetails detail={detail} key={index} />
        ))}
      </ul>
    </div>
  )
}
