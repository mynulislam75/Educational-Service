import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Staff from './components/Staff/Staff';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <div className="heading-name">
        <h2><span id="span-one">KIDS</span> <span id="span-two">LEARNING</span> <span id="span-three">INSTITUTE</span></h2>
        <br />
        <small>WE PROMISE,BEST SERVICE</small>
      </div>

      <BrowserRouter>
     <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/staff">
            <Staff></Staff>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contacts">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
