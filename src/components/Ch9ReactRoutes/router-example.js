import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
//useLocation.useLocation allow you to parse out more details about the current location in the browser and convert the data into variables.
//Using this, we can pull the query parameters out via the userLocation utility, specifically from the search property on useLocation.
//We can then build a new URLSearchParams object and use that to pull the specific parameter we want.

const About = () =>(
  <div className="About">
    <h1> About Page</h1>
    <hr/>
    <p>Information</p>
  </div>
)

const Homepage = () =>(
  <div className="Homepage">
    <h1>Homepage </h1>
    <hr/>
    <p>This is our homepage.</p>
  </div>
)

const Search = props =>{
  const query = new URLSearchParams(useLocation().search);
  console.log(useLocation());
  const term = query.get('q');
  const returned = doSearch(term);
  return (
    <div className="Search">
      <h1>Search Page</h1>
      <hr/>
      Found results from {term}:
      <ul>
        {returned.map(t=>(
          <li key={t}>{t} </li>
        ))}
      </ul>
    </div>
  )
}
const Items = [
  'Lorem Ipsum',
  'Ipsum Dpsum',
  'Foo Bar',
  'A little black cat',
  'A Lazy fox'
];

const doSearch = term =>{
  if(!term){
    return Items;
  }
  return Items.filter(
    item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1
  )
}

//The order of the Route components is important, the app will match from TOP to BOTTOM
//note: if you add Homepage (the default route before /about), you will never reach /about
//homepage need exact path
const RoutesExample = () =>(
  <Router>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path = "/about">
        <About />
      </Route>
      <Route path = "/search">
        <Search />
      </Route>
      <Route path="*">
        <h1>404 - Component Not Found</h1>
        <a href="/">Return Home</a>
      </Route>

    </Switch>
  </Router>
)

export default RoutesExample;
