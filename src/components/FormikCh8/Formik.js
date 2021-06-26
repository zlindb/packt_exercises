//Formik is one those lbiraries that came at just the right time to resolve a long standing issue
//Complex forms can include multiple embedded forms, dyamic firleds and validation, or handling asynchronous checks with the backend.

//The benefits of Formik before we look at practical exercise on how we can use it.
//Advantages of Formik
// -- Easy to intergrate: Since formik keeps the state local, it's more effortless to conert existing forms (either controlled or uncontrolled) into Formik ones. It does not compete against a state management library such as Redux or MobX, so the amount of dependencies stays small.
// -- Easy to understand: Learning new libraries and extensions to existing ones always takes some time to read and understand the documentation. you can always come up with an example case that will not adapt to your needs, so you will have to improvise. With Formik, you don't deviate from the concepts that you alreayd know, such a setting state and receiving props, so you will not have any issues learning how to utilize it quickly.
// -- Easy to configure: Formik offers several options when it comes to handling form validation, retrieving the values from and out of the state, and submitting the form. You can use Formik as an HOC when you want to pass one component to another, or as a render props pattern where the props of the parent component are passed to its children components.

import {Formik} from 'formik';
import React from 'react';
const FormikForm = () =>(
  //the initialValues is formik initial values and handlers, must be a plain object with string property names
  <Formik initialValues={{name:'', password: ''}} onSubmit={(values, { setSubmitting }) =>{
    setTimeout(()=>{
      console.info(JSON.stringify(values,null,2));
      setSubmitting(false);
    }, 400);
    //default the name to hello, overwriting the form submit value
    values.name="hello";
  }}
  >

  {({ values, handleChange, handleSubmit, isSubmitting }) =>(
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={values.name}
          onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </label>
      <input type="submit" value="Login" disabled={isSubmitting} />
    </form>
  )}
  </Formik>
)

export {FormikForm};
