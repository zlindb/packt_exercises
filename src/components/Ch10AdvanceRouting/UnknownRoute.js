import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation, Switch,
  Redirect,
  useParams
} from 'react-router-dom';

function Page1(){
  return <h3>Page1</h3>;
}
function Page2(){

  return <h3>page 2</h3>;
}

function Page3(){
  //get the params from links ?p=param1;p=param2
  let param = new URLSearchParams(useLocation().search);
  return <h3>{ param ? `${param}` : ''}</h3>
}

function Page4(){
  let { first, last } = useParams();
  return <h3>First: {first}, Last {last}</h3>
}

function NoMatch(){
  return <h3>404 Not Found</h3>
}

const UnknownRoute = () =>{
  return (
    <Router>
    <div>
      <ul>
        <h2>Pages</h2>
        <li>
          <Link to="/">Page1</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
        <li>
          <Link to="/page3?param=123">Page3</Link>
        </li>
        <li>
          <Link to="/page4">Page4</Link>
        </li>
      </ul>
      </div>
      {/*In this example here, we define three routes with unique page under <Switch/> components
        note that we can use <Route path="*"> or <Route > for the 404 path and that it always neesd to be the last in order
        of the defined routes. Otherwise any route after the NoMatch will be unreachable*/}
      <Switch>
        <Route exact path="/">
          <Page1 />
        </Route>
        <Route path="/Page2">
          <Page2 />
        </Route>
        <Route path="/Page3">
          <Page3 />
        </Route>
        <Route path="/404">
          <NoMatch />
        </Route>
        {/*new redirect route, when you visit a route that doesn't exist, such as /page4, it will redirect to /404 */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default UnknownRoute;
