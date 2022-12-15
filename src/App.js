import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Calculator from './Components/calculator/Calculator';
import QuoteCalc from './Components/quoteCalc/QuoteCalc';
import PingPong from './Components/pingpong/Pingpong'
import Shuffleboard from './Components/shuffleboard/Shuffleboard';
import Todo from './Components/todo/Todo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/quotecalc' element={<QuoteCalc />} />
        <Route path='/pingpong' element={<PingPong />} />
        <Route path='/shuffleboard' element={<Shuffleboard />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
