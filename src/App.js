
import './App.css';
import Login from './pages/login';
import Dashboard from './components/dashboard';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


//test
function App(props) {
  return (

    <div className="App">
      <BrowserRouter history={props.history}> 
          <Switch>
            <Route exact path="/" component={Login}>
            </Route>
            <Route path="/dashboard" component={Dashboard}>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
