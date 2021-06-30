import './App.css';
import React from 'react';
//import SimpleForm from './components/SimpleForm';
//import FieldLength from './components/FieldLength';
//import QuizAppConditional from './components/QuizAppConditional';

//import BoardGame from './components/BoardGame_ConditionalRendering';
//import ComponentDidMount from './components/LifeCycle';
//import ComponentWillUnMount from './components/ComponentWillUnmount';

//import Loader from "./components/Loader";
//import ChangeTheme from "./components/ChangeTheme";
//import ReactStateProps from "./components/ReactStateProps";

//import ComponentCommunication from "./components/ComponentCommunication";
//import BetweenComponent from "./components/BetweenComponentDataPass";
//import BetweenComponent from "./components/CommunicationBetweenComponentCh7/ContextAPIExample";

//----chapter 8 formik
//import UncontrolledComponents from "./components/FormikCh8/UncontrolledComponents";
//import ControlledComponents from "./components/FormikCh8/ControlledComponents";
//import { FormikForm }  from "./components/FormikCh8/Formik";
//import { MyEnhancedLoginForm as LoginForm } from "./components/FormikCh8/LoginForm";
//import FormLevelValidation from "./components/FormikCh8/FormLevelValidation";
//import FormValidationControl from "./components/FormikCh8/FormValidationControl";

//---Chapter 9 routes
//import RoutesExample from "./components/ReactRoutes/router-example";
import RoutesNested from "./components/Ch9ReactRoutes/NestedRoutes";

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <RoutesNested />
      </div>
    ) //end return
  }
};

export default App;
