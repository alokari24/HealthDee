import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { HospitalsPage } from './components/HospitalsPage';
import { DoctorsPage } from './components/DoctorsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'hospitals':
        return <HospitalsPage />;
      case 'doctors':
        return <DoctorsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg mb-4">HealthCare Plus</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connecting patients with quality healthcare providers. 
                Your health, our priority.
              </p>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setCurrentPage('hospitals')} className="hover:text-white transition-colors">Find Hospitals</button></li>
                <li><button onClick={() => setCurrentPage('doctors')} className="hover:text-white transition-colors">Book Doctors</button></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Health Records</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Telemedicine</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Careers</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Press</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="hover:text-white transition-colors cursor-pointer">Help Center</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
                <li><span className="hover:text-white transition-colors cursor-pointer">HIPAA Compliance</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 HealthCare Plus. All rights reserved. | Emergency: Call 911
            </p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}