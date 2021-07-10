import React from 'react';
import {Formik, Form, Field} from 'formik';
import { Prompt, Link, Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';

//another way to trigger a dialog message, by using the history package and any router type
//other than the StaticRouter. A StaticRouter is a router type that never changes location and is used mainly for testing.
import { createBrowserHistory as createHistory} from 'history';

function validateEmail(value){
  let error;
  if(!value){
    error='Email is required';
  }
  return error;
}

function validateName(value){
  let error;
  if(!value){
    error='Name is Required';
  }
  return error;
}

//preventing inbound transition
/*
  we can prevent inbound transitions by using protected routes. We can prevent the route from rendering if a condition is false.
  The easiest way we can do that is by using a Higher-order componnent where we check the condition there.
  For clarity, an HOC is a function that atkes a component and returns a new components, often by adding extra functionality.
*/
//as long as authService returns false, the Component is not rendered. Instead, we render a Redirect component that navigates us back to the home screen
const authService = {
  isAuthenticated: function(){
    return true;
  }
}

const Dashb = () =>(
  <div>Passing it to Protected Route Dashboard</div>
)

const ProtectedRoute = () =>{
  const history = createHistory({
    //define a history object by passing a getUserConfirmation property that is a function with a
    //message and a callback parameter. Inside this function, we can use a custom dialog or Prompt
    // before calling the callback function. We also need to import a history object that lets us manage the history stack,
    //navigate, and persist state between sessions.
    getUserConfirmation(message, callback){
      const allowTransition = window.confirm(message);
      callback(allowTransition)
    }
  });

  return (
    <div className="protectedroute">
    {/*using history package to trigger confirmation*/}
      <Router history={history}>
        <ul>
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/Feed">Feed</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact children={<SignupForm/>} />
          <Route path="/feed" children={<div>Feed</div>} />
          {/*Authentication service here, aka protected route*/}
          <IsAuthenticatedRoute exact path="/Dashboard" component={Dashb} />
        </Switch>
      </Router>
    </div>

  );
}

//The route also needs to be registered beforehand. Although this is a HOC, it's still a valid React Routr Route,
//we need to register it inside a <Routes> component.
//When the route matches, the render props function will be called to check this with the authentication service.
// This way, any operation involving checking the authentication status is idempotent and it will perform the same computation each time it is called
const IsAuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    (props)=> (
    authService.isAuthenticated() === true
    ? <Component {...props} />
    : <Redirect to={{
        pathname: '/',
        state: { from: props.location}
      }} />
    )} />
);

/*Formik Form*/
export const SignupForm =()=>(
  <div>
    <h1>Signup</h1>
    <Formik initialValues={{
        username: '',
        email:'',
      }}
      onSubmit={values=>{
        //same shade as initial values
        console.log(values);
      }}
    >
    {
      ({errors, touched, validateField, validateForm, dirty}) => (
        <Form>
          <label>
            Email*:
            <Field name="email" validate={validateEmail} />
          </label>
          {errors.email && touched.email && <div>{errors.email}</div>}
          <label>
            Name*:
            <Field name="username" validate={validateName} />
          </label>
          {errors.username && touched.username && <div>{errors.username}</div>}
          <button type="submit">submit</button>
          <span>Form is Dirty: {dirty ? "True" : "False"}</span>
          {/*
          <Prompt
            message={location=>
              `Are you sure you want to go ${location.pathname}? You will lose all your data`
              }
            when={dirty}
          />
          */
          /*Using the the history package to get user confirmation
            Notice: when property is removed, otherwise getUserConfirmation function will not trigger when we navigate elsewhere.
            In general, this way is more suitable for generic transition rules since the getUserConfirmation function will be called on every navigation event.
            */}
            <Prompt message={location=>
              `Are you sure you want to go to the ${location.pathname}? you will lose all your data!`
            }
            when={dirty}
            />

        </Form>
      )
    }
    </Formik>
  </div>

)

export default ProtectedRoute;
