import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';

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
  return error;
}

//Formik makes it easy to add validation rules. AT the basic level, it provides form-level validation checks.
const FormLevelValidation = () =>{

  return (
    <Formik initialStatus={{isValidating: false}}
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
        handleChange, handleBlur, handleSubmit, isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Name*:
            <Field type="text" name="name"
              validate={validateName}
              onBlur={handleBlur}
              onChange={handleChange}/>
          </label>
          <ErrorMessage name='name' />

          <label>
            Password*:
            <Field type="password" name="password"
              validate={validatePassword}
              onBlur={handleBlur}
              onChange={handleChange} />
          </label>
          <ErrorMessage name="password" />
          <input className="form-control" type="submit" value="Login" disabled={isSubmitting} />
        </form>
      )}
    </Formik>
  )
};

export default FormLevelValidation;
