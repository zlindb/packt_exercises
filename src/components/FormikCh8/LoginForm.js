import React from 'react';
import {withFormik} from 'formik';
import StatusMessage from './ConnectExample'

// the UI layer is separate from the component containing configuration and business logic, we can update the ui without touching the business layer
const LoginForm = (props) =>{
  const {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
    status
  } = props;
  return (
    <form onSubmit = {handleSubmit}>
      <label>
        Name: <input type="text" name="name" value={values.name} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </label>
      {status.isValidating}
      <br/>
      <input type="submit" value="Login" disabled={isSubmitting} />
      <br/>
      Status: <StatusMessage />
    </form>
  )
}

//with Formik is a higher order components, that allows ut to separate the definition of the Formik component configuration from the UI layer.
//this is useful when we have a componenent where we want to have access to the Formik properties and callback methods without actually defining form elements, or when we have an existing form and we want to delegate its callbacs to Formik without changing the UI of the original form
//this is the logic layer
const MyEnhancedLoginForm = withFormik({
  mapPropsToStatus: () =>({ isValidating: 'false'}),
  mapPropsToValues: () =>({ name:'', password: ''}),

  handleSubmit: (values, { setSubmitting, setStatus }) =>{
    setStatus({ isValidating: 'true'});
    setTimeout(()=>{
      alert(JSON.stringify(values, null,2));
      setSubmitting(false);
      setStatus({ isValidating: 'false'});
    },1000);
  },

  displayName:'LoginForm',
})(LoginForm);

export {MyEnhancedLoginForm}
