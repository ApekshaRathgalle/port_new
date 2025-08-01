import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contacts from './pages/contacts';
import WebDev from './components/webdev';
import Salogame from './components/salogame';
import SocialMedia from './components/socialmedia';
import MusicPlatform from './components/musicplatform';
import ParkingSystem from './components/parkingsystem';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/salogame" element={<Salogame />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/musicplatform" element={<MusicPlatform />} />
        <Route path="/parkingsystem" element={<ParkingSystem />} />
      </Routes>
    </Router>
  );
}

export default App;