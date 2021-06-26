import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik'

import * as Yup from 'yup';

//control when formik runs validation rules - By Default, Formik triggers a validation phase on change, on blur, and just before the onSubmit handler is invoked.
//validateOnChange: true if valdation happens when onChange
//validateOnBlur: True if validation happens when onBlur
//validateField: Validates the field specified by their name, ex: validateField('name')
//validateForm: Validates the entire form whenver called

//SCHEMA Validation
//SChema validation is basically defined as an object of keys nameed as the initialVAlues property and for each key there is a function that performs the list of validations.
//When we trigger a validation phase, Formik will use the ValidationSchema object to map the values object to it.
//Then, it will convert any errors that Yup returns into the familiar errors object and passes on the render props cb.

//if we defined extra validation rules, they will called in conjunction.
//If any of them resolve with an error, they will combine to form the errors object. This is not recommended, the values key will clash so only one of the validation message will show

function validateName(value){
  let error;
  if(!value){
    error = 'Name is required';
  }
  return error;
}

function validatePassword(value){
  let error;
  if(!value){
    error = 'Password is Required';
  }
  if(value.length < 8){
    error = 'Min length of Password is 8 chars';
  }
  return error;
}

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Required')
});

const FormYupValidation = () =>{
  //use validationSchma here
  return (
    <Formik
      validationSchema={LoginSchema}
      initialStatus={{isValidating: false}}
      initialValues={{ name:'', password:''}}
      onSubmit={(values, { setSubmitting, setStatus }) =>{
        setStatus({isValidating: true});
        setTimeout(()=>{
          console.info(JSON.stringify(values,null,2));
          setSubmitting(false;
          setStatus({isValidating: false}))
        }, 400)
      }}
    >
    {({handleChange, handleBlur, handleSubmit, isSubmitting})=>(
      <form onSubmit={handleSubmit}>
        <label>
          name*:
          <Field type='text' name="name"
            onBlur={handleBlur}
            validate={validateName}
            onChange={handleChange}
          />
        </label>
        <ErrorMessage name="name" className="error" component="span" />
        <label>
          password*:
          <Field type='text' name="name"
            onBlur={handleBlur}
            validate={validatePassword}
            onChange={handleChange}
          />
        </label>
        <ErrorMessage name="name" className="error"
        <input type="submit" value="Login" disabled={isSubmitting} />
      </form>
    )}
    </Formik>
  )
}

export default FormYupValidation;
