// Modules
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Detail from './pages/details/DetailPage';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/:id" element={ <Detail/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App;
