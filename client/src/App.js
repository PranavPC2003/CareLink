// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavbarComponent from './components/Navbar';
// import HospitalList from './components/HospitalList';
// import LandingPage from './components/LandingPage';
// import Maps from './components/Maps';
// import HypertensionForm from './components/HypertensionForm'; 
// import AppointmentBooking from './components/AppointmentBooking';  // Import Appointment Booking Component
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <NavbarComponent />
//       <Routes>
//         <Route path="/" element={<LandingPage />} /> {/* Default path */}
//         <Route path="/hospitals/hospital-list" element={<HospitalList />} /> {/* Hospital list */}
//         <Route path="/hospitals/book-appointment" element={<AppointmentBooking />} /> {/* Appointment Page */}
//         <Route path="/maps" element={<Maps />} />
//         <Route path="/form" element={<HypertensionForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import HospitalList from './components/HospitalList';
import LandingPage from './components/LandingPage';
import Maps from './components/Maps';
import HypertensionForm from './components/forms/HypertensionForm'; 
import AppointmentBooking from './components/AppointmentBooking';
import './App.css';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Hospital Routes */}
        <Route path="/hospitals/hospital-list" element={<HospitalList />} />
        <Route path="/hospitals/book-appointment" element={<AppointmentBooking />} />
        
        {/* Maps Route */}
        <Route path="/maps" element={<Maps />} />
        
        
        {/* Hypertension Form Route */}
        <Route path="/forms/HypertensionForm" element={<HypertensionForm />} />
        

      </Routes>
    </Router>
  );
}

export default App;

