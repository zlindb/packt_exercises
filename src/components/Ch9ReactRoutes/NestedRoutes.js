import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, Link, useRouteMatch } from 'react-router-dom';

//Link - Component acts like standard anchor tags in HTML, but it also helps you to preload necessary data for the component you are navigating to. It also does a better job intercepting the navigation request in the browser so that only the component is refreshed instead of the entire page.
//useRouteMatch() - return specifically two pieces of information: the current path and the current full URL. We will need both to construct our nested paths and the links of the current path to avoid a situation where we change the about top-level path to something else and then have to go in and find every single nested route and fix those too.

//setting up nested routing in about component
//we want our /aboutpath to have two nested paths: /about/bio and /about/contact.
//These should display the About component and then additionally one of the nested routes
//We just place a Router > Switch > Route hierarchy into our component.
const About = () =>{
  const { path, url } = useRouteMatch();
  console.log(url);
  return (
    <Router>
      <div className="About">
        <h1> About Page</h1>
        <hr/>
        <p>Information about your</p>

        <hr/>
        <Link to={`${url}`}>About Home</Link>
        &nbsp;
        <Link to={`${url}/contact`}>Contact</Link>
        &nbsp;
        <Link to={`${url}/bio`}>Bio</Link>
        <hr/>
        <Switch>
        <Route path={`${path}/contact`}>
          <Contact/>
        </Route>
        <Route path={`${path}/bio`}>
          <Bio />
        </Route>
        </Switch>
      </div>
    </Router>
  )
}

const Homepage = () =>(
  <div className="Homepage">
    <h1>Homepage </h1>
    <hr/>
    <p>This is our homepage.</p>
  </div>
)

const Bio = () =>(
  <div className="Bio">
  <h2>Bio</h2>
  <hr/>
  <p>cool?</p>
  </div>
)
const Contact = () =>(
  <div className="Contact">
    <h2>Contact Me</h2>
    <hr/>
    <p>Send me an email at test@test.com</p>
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

//Allow different routes to be navigated within the context of the app
//instead of the browser. Each Link component we use will have a property called to on it that tell us where the Link component needs to be pointed to:

//going to be added to inside of a router.
const Navbar = () =>(
  <div className="Navbar">
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/about">About</Link>
  </div>
)

//The order of the Route components is important, the app will match from TOP to BOTTOM
//note: if you add Homepage (the default route before /about), you will never reach /about
//homepage need exact path
const RoutesNested = () =>(
  <Router>
    <Navbar />
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

export default RoutesNested;
