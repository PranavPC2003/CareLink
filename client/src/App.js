import React from 'react';
import HospitalList from './components/HospitalList';
import Maps from './components/Maps';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <div className="App">
      <HospitalList />
      <Maps />
    </div>
  );
}

export default App;
