import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Featured from './components/Featured/Featured';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Watch from './pages/Watch/Watch';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Home type="movies" />
        </Route>
        <Route path="/series">
          <Home type="series" />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
      </Switch>
    </Router>
  );
}