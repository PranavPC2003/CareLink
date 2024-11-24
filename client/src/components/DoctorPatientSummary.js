import React, { useEffect, useState } from 'react';
// import '../App.css';
import './DoctorPatientSummary.css';

function DoctorPatientSummary() {
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSummaryId, setExpandedSummaryId] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/patient-summary-listView/?doctor_id=7') // Replace with dynamic doctor_id as needed
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    //   .then(data => {
    //     console.log(data);
    //     setSummaries(data);
    //     setLoading(false);
    //   })
    .then(data => {
        // Sort summaries by created_at in descending order
        const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setSummaries(sortedData);
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

  const toggleSummary = (id) => {
    setExpandedSummaryId(expandedSummaryId === id ? null : id);
  };

  return (
    <div className="page-container">
      <h1>Patient Summaries</h1>
      <div className="summary-list">
        {summaries.map(summary => (
          <div key={summary._id} className="summary-item" style={{width:"650px"}}>
            <div className="summary-basic-info">
              <h2 style={{marginBlock:"auto"}}>{summary.basic_information.full_name}</h2>
              <p style={{marginBlock:"auto"}}><strong>Date:</strong> {new Date(summary.created_at).toLocaleString()}</p>
              <button 
                onClick={() => toggleSummary(summary._id)} 
                className="toggle-button"
              >
                {expandedSummaryId === summary._id ? 'Hide Details' : 'View Details'}
              </button>
            </div>
            {expandedSummaryId === summary._id && (
          <div className="summary-details">
            <h3>Basic Information</h3>
            <p><strong>Gender:</strong> {summary.basic_information?.gender || "N/A"}</p>
            <p><strong>Contact:</strong> {summary.basic_information?.contact_information || "N/A"}</p>
            <p>
              <strong>Conditions:</strong> 
              {summary.basic_information?.existing_conditions?.join(', ') || "None"}
            </p>

            <h3>Symptoms</h3>
            <p>
              <strong>Primary Symptoms:</strong> 
              {summary.symptoms?.primary_symptoms?.join(', ') || "None"}
            </p>
            <p><strong>Onset:</strong> {summary.symptoms?.symptom_onset || "N/A"}</p>
            <p><strong>Pain Level:</strong> {summary.symptoms?.pain_level || "N/A"}</p>

            <h3>Predicted Diagnosis</h3>
            <p><strong>Primary:</strong> {summary.predicted_diagnosis?.primary_prediction || "N/A"}</p>
            <p><strong>Secondary:</strong> {summary.predicted_diagnosis?.secondary_prediction || "N/A"}</p>
            <p>
              <strong>Alternative Considerations:</strong> 
              {summary.predicted_diagnosis?.alternative_considerations?.join(', ') || "None"}
            </p>

            <h3>Suggested Remedies</h3>
            <p>
              <strong>Lifestyle Modifications:</strong> 
              {summary.suggested_remedies?.lifestyle_modifications?.join(', ') || "None"}
            </p>
            <p>
              <strong>Medication Suggestions:</strong> 
              {summary.suggested_remedies?.medication_suggestions?.join(', ') || "None"}
            </p>
            <p>
              <strong>Follow-up Tests:</strong> 
              {summary.suggested_remedies?.followup_tests?.join(', ') || "None"}
            </p>

            <h3>Additional Notes</h3>
            <p>
              <strong>Relevant Alerts:</strong> 
              {summary.additional_notes?.relevant_alerts?.join(', ') || "None"}
            </p>
            <p><strong>Patient Concerns:</strong> {summary.additional_notes?.patient_concerns || "No notes available."}</p>
          </div>
        )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorPatientSummary;