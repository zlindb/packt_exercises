import React from 'react';

import { connect, getIn } from 'formik';

//used in connect login form

const StatusMessage = props => {
  const isValidating = getIn(props.formik.status, 'isValidating');
  return isValidating ? 'Is Validating' : 'Is Not Validating';
}

//connect is a utility component designed to inject the Formik context into any React Component via their props
export default connect(StatusMessage);
