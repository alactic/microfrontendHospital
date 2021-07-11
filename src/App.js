import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import NotFound from './NotFound';
import "./App.css";

function App() {
  const history = useHistory();
  console.log({ history});
  return (
    <Router>
      <div className="App">
      <Link to="/about">About</Link> &nbsp;&nbsp;&nbsp; ||&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/redux">Home</Link>&nbsp;&nbsp;&nbsp; ||&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/">Login</Link>&nbsp;&nbsp;&nbsp; ||&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/rrrror">not found</Link>
      
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/redux" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact component={NotFound} />
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
