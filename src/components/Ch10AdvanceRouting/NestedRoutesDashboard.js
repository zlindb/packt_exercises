import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';

import "./nestedRoutesDashboard.css";


function Widget() {
  let { widgetName } = useParams();
  return (
    <div>
      <h3>Widget: {widgetName}</h3>
    </div>
  )
}

function Home(){
  return <h3>Home Page</h3>
}

const NestedRoutesDashboard = () =>{
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

const Dashboard = () =>{
  let { path, url } = useRouteMatch();
  return (
    <div className='row'>
      <div className="sidebar">
        Sidebar
      </div>
      <div className="main">
        <div className="navbar">
          <Link to ={`${url}/map`}>Map</Link>
          <Link to ={`${url}/chart`}>Chart</Link>
          <Link to ={`${url}/table`}>Table</Link>
        </div>
      <Switch>
        <Route exact path={path}>
          <h3>Select a widget</h3>
        </Route>
        {/*Passing :widgetName to Widget component, used by useParams()*/}
        <Route path={`${path}/:widgetName`}>
          <Widget />
        </Route>
      </Switch>
      </div>
    </div>
  )
}

export default NestedRoutesDashboard;
