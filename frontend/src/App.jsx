import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Login/LoginPage';
import RegistrationPage from './pages/Registration/RegistrationPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes here */}
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Registration />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;



