
import './App.css';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import {AnimatePresence} from 'framer-motion';
import GlobalStyle from './globalStyle';



function App() {
  
  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence>
      <Switch >
        <Route path = '/' exact component = {Home} />
        <Route path = 'about' component = {About} />
        <Route path = 'products' component = {Products} />
        </Switch>
        </AnimatePresence>
      </Router>
     
  
  );
}

export default App;
