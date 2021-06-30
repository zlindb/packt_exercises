import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';

//new - validateField from formik example
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
  if(value.length < 8 ){
    error = 'Min Length of Password is 8 chars';
  }

  return error;
}

//add new validateField component from formik
//validateField manually activate the validation method
//aka async validation
const FormValidationControl = () =>{
  return (
    <Formik validateOnChange={false} validateOnBlur={false}
    initialStatus={{isValidating: false}}
    initialValues={{ name: '', password: ''}}
    onSubmit={(values, { setSubmitting, setStatus }) =>{
      setStatus({ isValidating: true});
      setTimeout(() => {
        console.info(JSON.stringify(values, null, 2));
        setSubmitting(false);
        setStatus({isValidating: false})
      }, 400);
    }}
    >

    {({
        validateField, handleChange, handleBlur, handleSubmit, isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Name*:
            <Field type="text" name="name"
              validate={validateName}
              onBlur={(e)=>{
                handleBlur(e);
                console.log('manually trigger onblur, async validation');
                validateField('name');
              }}
              onChange={(e)=> {
                handleChange(e);
                validateField('name');
              }}
              />
          </label>
          <ErrorMessage name='name' />

          <label>
            Password*:
            <Field type="password" name="password"
              validate={validatePassword}
              onBlur={(e)=>{
                handleBlur(e);
                validateField('password');
              }}
              onChange={handleChange}
              />
          </label>
          <ErrorMessage name="password" />
          <input type="submit" value="Login" disabled={isSubmitting} />
        </form>
      )}
    </Formik>
  )
};

export default FormValidationControl;
