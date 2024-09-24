import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './builder/components/LoginPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;



