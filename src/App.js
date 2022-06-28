import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/pages/NavLink';
import Mission from './components/pages/Missions/Mission';
import Rocket from './components/pages/Rockets/Rocket';
import Profile from './components/pages/Profiles/Profile';
import NoMatch from './components/pages/NoMatchs/NoMatch';
import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
  </Router>

);

export default App;
