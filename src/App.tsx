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
    <div className="App select-none">
      <Router>
        <Header />
        <Route path="/portfolio-react" exact>
          <Home />
        </Route>
        <Route path="/portfolio-react/about">
          <About />
        </Route>
        <Route path="/portfolio-react/contact">
          <Contact />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;