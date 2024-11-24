import React, { useState } from 'react';
import './PatientForm.css';  // Create a separate CSS file for styling

function PatientForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    contactNumber: '',
    existingConditions: '',
    medications: '',
    doctorId: '',
    primarySymptoms: '',
    symptomOnset: '',
    painLevel: '',
    otherSymptoms: '',
    triggerFactors: '',
    smokingStatus: '',
    alcoholConsumption: '',
    dietaryPreferences: '',
    exerciseFrequency: '',
    sleepPatterns: '',
    familyHistory: '',
    recentProcedures: '',
    recentTravel: '',
    travelLocation: '',
    observations: '',
    treatmentPreferences: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/patient-summary/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Patient data submitted successfully');
        setFormData({
          fullName: '',
          dob: '',
          gender: '',
          contactNumber: '',
          existingConditions: '',
          medications: '',
          doctorId: '',
          primarySymptoms: '',
          symptomOnset: '',
          painLevel: '',
          otherSymptoms: '',
          triggerFactors: '',
          smokingStatus: '',
          alcoholConsumption: '',
          dietaryPreferences: '',
          exerciseFrequency: '',
          sleepPatterns: '',
          familyHistory: '',
          recentProcedures: '',
          recentTravel: '',
          travelLocation: '',
          observations: '',
          treatmentPreferences: ''
        });
      } else {
        alert('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting data');
    }
  };

  return (
    <div className="patient-form-container">
      <h2>Patient Questionnaire</h2>
      <form onSubmit={handleSubmit} className="patient-form">
        {/* Basic Information */}
        <section className="form-section">
          <h3>Basic Information</h3>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
          
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          
          <label>Contact Information:</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Enter your contact number" required />
          
          <label>Existing Conditions:</label>
          <textarea name="existingConditions" value={formData.existingConditions} onChange={handleChange} placeholder="List any existing medical conditions" required />
          
          <label>Medications:</label>
          <textarea name="medications" value={formData.medications} onChange={handleChange} placeholder="List any current medications you are taking" required />
          
          <label>Doctor ID:</label>
          <input type="text" name="doctorId" value={formData.doctorId} onChange={handleChange} placeholder="Enter your doctor’s ID (if known)" />
        </section>

        {/* Symptoms */}
        <section className="form-section">
          <h3>Symptoms</h3>
          <label>Primary Symptoms:</label>
          <textarea name="primarySymptoms" value={formData.primarySymptoms} onChange={handleChange} placeholder="List your main symptoms" required />
          
          <label>Symptom Onset:</label>
          <input type="date" name="symptomOnset" value={formData.symptomOnset} onChange={handleChange} required />
          
          <label>Pain Level (1-10):</label>
          <input type="number" name="painLevel" value={formData.painLevel} onChange={handleChange} placeholder="Rate your pain level" required />
          
          <label>Other Symptoms:</label>
          <textarea name="otherSymptoms" value={formData.otherSymptoms} onChange={handleChange} placeholder="Describe any additional symptoms" />
          
          <label>Trigger Factors:</label>
          <textarea name="triggerFactors" value={formData.triggerFactors} onChange={handleChange} placeholder="What seems to worsen your symptoms?" />
        </section>

        {/* Lifestyle */}
        <section className="form-section">
          <h3>Lifestyle</h3>
          <label>Smoking Status:</label>
          <select name="smokingStatus" value={formData.smokingStatus} onChange={handleChange} required>
            <option value="">Select Smoking Status</option>
            <option value="Smoker">Smoker</option>
            <option value="Non-smoker">Non-smoker</option>
            <option value="Former smoker">Former smoker</option>
          </select>
          
          <label>Alcohol Consumption:</label>
          <select name="alcoholConsumption" value={formData.alcoholConsumption} onChange={handleChange} required>
            <option value="">Select Alcohol Consumption</option>
            <option value="Regularly">Regularly</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Never">Never</option>
          </select>
          
          <label>Dietary Preferences:</label>
          <textarea name="dietaryPreferences" value={formData.dietaryPreferences} onChange={handleChange} placeholder="List your dietary preferences" />
          
          <label>Exercise Frequency:</label>
          <select name="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleChange} required>
            <option value="">Select Exercise Frequency</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Occasionally">Occasionally</option>
            <option value="Rarely">Rarely</option>
          </select>
          
          <label>Sleep Patterns:</label>
          <select name="sleepPatterns" value={formData.sleepPatterns} onChange={handleChange} required>
            <option value="">Select Sleep Patterns</option>
            <option value="Regular">Regular</option>
            <option value="Irregular">Irregular</option>
          </select>
        </section>

        {/* Health History */}
        <section className="form-section">
          <h3>Health History</h3>
          <label>Family History:</label>
          <textarea name="familyHistory" value={formData.familyHistory} onChange={handleChange} placeholder="List any family history of illnesses" />
          
          <label>Recent Procedures:</label>
          <textarea name="recentProcedures" value={formData.recentProcedures} onChange={handleChange} placeholder="Mention any recent medical procedures" />
          
          <label>Recent Travel:</label>
          <select name="recentTravel" value={formData.recentTravel} onChange={handleChange} required>
            <option value="">Select Recent Travel</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          
          {formData.recentTravel === 'Yes' && (
            <>
              <label>If Yes, Travel Location:</label>
              <input type="text" name="travelLocation" value={formData.travelLocation} onChange={handleChange} placeholder="Where did you travel recently?" required />
            </>
          )}
        </section>

        {/* Additional Notes */}
        <section className="form-section">
          <h3>Additional Notes</h3>
          <label>Observations:</label>
          <textarea name="observations" value={formData.observations} onChange={handleChange} placeholder="Describe how you are feeling overall" />
          
          <label>Treatment Preferences:</label>
          <textarea name="treatmentPreferences" value={formData.treatmentPreferences} onChange={handleChange} placeholder="Mention any preferences for treatments" />
        </section>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default PatientForm;
