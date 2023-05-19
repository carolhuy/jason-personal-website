import './App.css';
import About from './components/About';
import Home from './components/Home';
import Research from './components/Research';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/research' element={<Research/>}/> 
        <Route path='/writing' element={<Writing/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
      </Routes> 
      </Router>
    </div>
  );
}

export default App;
