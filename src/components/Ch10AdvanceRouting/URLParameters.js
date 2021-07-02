//To define URL variables, we need to prepend them with a colon: followed by the name of the parameter.
//:id, :username, :email, :type
//These are not valid paramters - ?id, -username, &email, type, *search*

//Then we can access the parameters using useParams() function

import React from 'react';
import { BrowserRouter as Router,
  Link,
  Route,
  useParams, useLocation, Switch} from 'react-router-dom';

function Page1(){
  return <h3>Page1</h3>;
}
function Page2(){
  let {id} = useParams();
  console.info(useLocation().search);
  return <h3>ID: {id}</h3>;
}

function Page3(){
  let { name } = useParams();
  return <h3>Hello { name? `${name}` : 'stranger'}</h3>
}

function Page4(){
  let { first, last } = useParams();
  return <h3>First: {first}, Last {last}</h3>
}


const URLParameters = () =>{
  return (
    <div className= "main">
    <Router>
      <div>
      <h2>Pages</h2>
      <ul>
        <li>
          <Link to= "/">Page1</Link>
        </li>
        <li>
          <Link to="/name">Page2</Link>
        </li>
        <li>
          <Link to="/path/Theo">Page3</Link>
        </li>
        <li>
          <Link to="/path/">Page3 Missing Param</Link>
        </li>
        <li>
          <Link to="/path/theo/despoundis">Page4</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path = "/">
        <Page1 />
      </Route>
      <Route exact path = "/:id">
        <Page2 />
      </Route>
      <Route exact path="/path/:name">
        <Page3 />
      </Route>
      <Route path = "/path/:first/:last">
        <Page4 />
      </Route>
    </Switch>
    </Router>
    </div>


  )
}

export default URLParameters;
