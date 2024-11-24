
import React, { useState } from 'react';
import '../../App.css';

function HypertensionForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    diagnosed: '',
    monitor: '',
    monitorRange: '',
    symptoms: [],
    medications: '',
    allergies: '',
    lifestyle: '',
    additionalConditions: '',
    familyHistory: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        symptoms: checked
          ? [...prevData.symptoms, value]
          : prevData.symptoms.filter(item => item !== value),
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/patient-summary/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Form data submitted successfully:', data);
      // Optionally, handle successful form submission here
    })
    .catch(error => {
      console.error('Error submitting form data:', error);
      // Optionally, handle error here
    });
  };

  return (
    <div className="form-container">
      <h1>Hypertension Symptom Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Section A: General Information</h2>
          <label>
            Have you or your loved one been diagnosed with hypertension (high blood pressure) in the past?
            <select name="diagnosed" value={formData.diagnosed} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not sure">Not sure</option>
            </select>
          </label>
        </div>

        <div className="form-section">
          <h2>Section B: Blood Pressure Monitoring</h2>
          <label>
            Do you monitor blood pressure regularly at home or in a healthcare setting?
            <select name="monitor" value={formData.monitor} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          {formData.monitor === 'Yes' && (
            <label>
              If you monitor at home, what is the average range of your blood pressure readings (e.g., systolic/diastolic)?
              <input
                type="text"
                name="monitorRange"
                value={formData.monitorRange}
                onChange={handleChange}
              />
            </label>
          )}
        </div>

        <div className="form-section">
          <h2>Section C: Hypertension Symptoms</h2>
          <label>
            <input
              type="checkbox"
              name="symptoms"
              value="Headaches"
              checked={formData.symptoms.includes('Headaches')}
              onChange={handleChange}
            />
            Headaches
          </label>
          <label>
            <input
              type="checkbox"
              name="symptoms"
              value="Dizziness or lightheadedness"
              checked={formData.symptoms.includes('Dizziness or lightheadedness')}
              onChange={handleChange}
            />
            Dizziness or lightheadedness
          </label>
          <label>
            <input
              type="checkbox"
              name="symptoms"
              value="Blurred vision"
              checked={formData.symptoms.includes('Blurred vision')}
              onChange={handleChange}
            />
            Blurred vision
          </label>
          <label>
            <input
              type="checkbox"
              name="symptoms"
              value="Shortness of breath"
              checked={formData.symptoms.includes('Shortness of breath')}
              onChange={handleChange}
            />
            Shortness of breath
          </label>
          <label>
            <input
              type="checkbox"
              name="symptoms"
              value="Chest pain"
              checked={formData.symptoms.includes('Chest pain')}
              onChange={handleChange}
            />
            Chest pain
          </label>
          <label>
            <input
              type="checkbox"
              name="symptoms"
              value="None of the above"
              checked={formData.symptoms.includes('None of the above')}
              onChange={handleChange}
            />
            None of the above
          </label>
          <label>
            Other (please specify):
            <input
              type="text"
              name="otherSymptoms"
              value={formData.otherSymptoms || ''}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-section">
          <h2>Section D: Medications and Allergies</h2>
          <label>
            Are you or your loved one currently taking any medications or supplements for hypertension?
            <select name="medications" value={formData.medications} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label>
            Do you or your loved one have any known allergies to medications or supplements?
            <input
              type="text"
              name="allergies"
              value={formData.allergies || ''}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-section">
          <h2>Section E: Lifestyle and Diet</h2>
          <label>
            Describe your or your loved one's current lifestyle and dietary habits, including physical activity, alcohol consumption, and salt intake.
            <textarea
              name="lifestyle"
              value={formData.lifestyle || ''}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-section">
          <h2>Section F: Additional Health Conditions</h2>
          <label>
            Do you or your loved one have any other medical conditions (e.g., diabetes, heart disease) that are being managed alongside hypertension?
            <select name="additionalConditions" value={formData.additionalConditions} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        <div className="form-section">
          <h2>Section G: Family History</h2>
          <label>
            Is there a family history of hypertension or related cardiovascular conditions?
            <select name="familyHistory" value={formData.familyHistory} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        <div className="form-section">
          <h2>Personal Information</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label>
            Height (cm):
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HypertensionForm;
