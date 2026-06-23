import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Auth Pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Homepage from './pages/main/Homepage';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
         {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          {/* Main Routes */}
        <Route path="/" element={<Homepage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;

