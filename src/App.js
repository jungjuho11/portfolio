import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import AboutMe from './Components/aboutme/AboutMe';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Calculator from './Components/calculator/Calculator';
import QuoteCalc from './Components/quoteCalc/QuoteCalc';
import PingPong from './Components/pingpong/Pingpong'
import Shuffleboard from './Components/shuffleboard/Shuffleboard';
import Todo from './Components/todo/Todo';
import GithubStalker from './Components/githubStalker/GithubStalker';

import './app.css'

function App() {
  document.body.style.backgroundColor = '#e5e5e5';
  return (
    <Router>
      <Navbar />
      <Routes className="app">
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/quotecalc' element={<QuoteCalc />} />
        <Route path='/pingpong' element={<PingPong />} />
        <Route path='/shuffleboard' element={<Shuffleboard />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/githubstalker' element={<GithubStalker />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
