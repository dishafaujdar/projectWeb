import { Routes, Route } from 'react-router-dom';
import Home from './components/page/Home';
import Signin from './components/sections/Signin';
import Signup from './components/sections/Signup';
import GuestDashboard from './components/page/GuestDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/guest-dashboard" element={<GuestDashboard />} />
    </Routes>
  );
}

export default App;