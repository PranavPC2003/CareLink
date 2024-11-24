// HospitalList.js
import React, { useEffect, useState } from 'react';
import '../App.css';

function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hospital-view/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setHospitals(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search hospitals..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <h1>Hospitals</h1>
      <div className="hospital-list">
        {filteredHospitals.map(hospital => (
          <div key={hospital.hospital_id} className="hospital-item">
            <h2>{hospital.name}</h2>
            <p>{hospital.description}</p>
            <p><strong>Location:</strong> {hospital.location}</p>
            <p><strong>Category:</strong> {hospital.category}</p>
            <img src={hospital.logo} alt={`${hospital.name} logo`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalList;
