
import './App.css';
import Form from '../src/pages/form'
import { Route, BrowserRouter, Link,  Switch } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';

function App() {
  return (

<div className="App">
     <Form />
     < BrowserRouter >
      <div>
         <ul>
            <li>
               <Link to="/home">Home</Link>
            </li>
            <li>
               <Link to="/about">About Us</Link>
            </li>
            <li>
               <Link to="/contact">Contact Us</Link>
            </li>
         </ul>
         <Switch>
           
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
           
         </Switch>
      </div>
   </ BrowserRouter >
   </div>
  );
}

export default App;
