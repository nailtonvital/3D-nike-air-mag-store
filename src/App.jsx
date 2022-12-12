import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import AirMagPage from "./pages/AirMagPage";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="shoes" />
          <Route path="shoes/shoe" element={<AirMagPage />} />
          <Route path="cart" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
