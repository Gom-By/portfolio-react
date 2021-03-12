import './assets/main.css';
import './App.css'
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;