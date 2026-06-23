import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Auth Pages
import Login from './pages/auth/Login';


import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
         <Route element={<ProtectedRoute />}>
          {/* Main Routes */}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;

