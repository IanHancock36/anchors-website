
import './App.css';
import { Switch, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import styled from 'styled-components'

function App() {
  let location = useLocation();
  return (
    <Router>
      <Switch location={location} key={location.pathname}>
        <Route path = "/" exact component = {Home} />
        <Route path = "About" component = {About} />
        <Route path = "Products" component = {Products} />
        </Switch>
      </Router>
     
  
  );
}

export default App;
