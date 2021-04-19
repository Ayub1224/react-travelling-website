import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home';
import Services from './components/pages/services';
import SignUp from './components/pages/signup';
import AboutUS from './components/pages/AboutUS';
import Products from './components/pages/Products';
import Footer from './components/footer'

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/'exact component={Home}/>
      <Route path='/Services'exact component={Services}/>
      <Route path='/SignUp'exact component={SignUp}/>
      <Route path='/AboutUS'exact component={AboutUS}/>
      <Route path='/Products'exact component={Products}/>
        {/* <Route path="/Services">
          <Services/>
        </Route> */}
    </Switch>
    <Footer/>
    </Router>
  )
}

export default App;

/* tere are 2 ways to add the home page inte the app page 
1:
<Route path = "/">
<Home/>
</Route>

2: <Route exact path = "/" component={Home}/>*/