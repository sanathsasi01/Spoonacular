import Navbar from './Components/Navbar';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
