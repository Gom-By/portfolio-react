import './assets/main.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <p>Hello in home page</p>
      </Route>
      <Route path="/about">
        <p>Hello in about page</p>
      </Route>
      <Route path="/contact" exact>
        <p>Hello in contact page</p>
      </Route>
    </Router>
  );
}

export default App;