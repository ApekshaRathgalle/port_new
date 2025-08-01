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
import MobileDev from './components/mobiledev';

import TaskApp from './components/taskapp';
import FitnessApp from './components/fitnessapp';

// UI/UX Components
import UIUX from './components/uiux';
import EcoLivingDesign from './components/ecolivingdesign';
import FinanceFlowDesign from './components/financeflowdesign';



function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
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
          <Route path="/mobile" element={<MobileDev />} />
          
          <Route path="/taskapp" element={<TaskApp />} />
          <Route path="/fitnessapp" element={<FitnessApp />} />
          
          {/* UI/UX Routes */}
          <Route path="/uiux" element={<UIUX />} />
          <Route path="/ecoliving-design" element={<EcoLivingDesign />} />
          <Route path="/financeflow-design" element={<FinanceFlowDesign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;