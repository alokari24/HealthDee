import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { HospitalListings } from './components/HospitalListings';
import { DoctorListings } from './components/DoctorListings';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hospitals" element={<HospitalListings />} />
          <Route path="/doctors" element={<DoctorListings />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}