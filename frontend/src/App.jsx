import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Registration from './pages/Auth/Registration';
import SignIn from './pages/Auth/SignIn';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Registration />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;



