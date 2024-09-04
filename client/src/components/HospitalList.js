import React, { useEffect, useState } from 'react';

function HospitalList() {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hospital-view/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setHospitals(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/hospital-view/')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error('Error:', error));
  // }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Hospitals</h1>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital.hospital_id}>
            <h2>{hospital.name}</h2>
            <p>{hospital.description}</p>
            <p><strong>Location:</strong> {hospital.location}</p>
            <p><strong>Category:</strong> {hospital.category}</p>
            <img src={hospital.logo} alt={`${hospital.name} logo`} width="150" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HospitalList;
