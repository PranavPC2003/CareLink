

// import React, { useState } from 'react';
// import './AppointmentBooking.css';

// function AppointmentBooking() {
//   console.log("AppointmentBooking Component Rendered");

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [isError, setIsError] = useState(false);  // Track if it's an error message

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const currentPhone = formData.phone;
//     const currentDateTime = new Date(`${formData.date}T${formData.time}`);

//     // Get last appointment from localStorage
//     const lastAppointment = JSON.parse(localStorage.getItem(currentPhone));

//     if (lastAppointment) {
//       const timeDifference = currentDateTime - new Date(lastAppointment.time);
//       const oneHourInMs = 1000 * 60 * 60;  // 1 hour in milliseconds

//       if (timeDifference < oneHourInMs) {
//         // Show error message if appointment is booked within an hour
//         setModalMessage('Appointment already booked within the last hour.');
//         setIsError(true);
//         setShowModal(true);
//         return;  // Do not submit the form
//       }
//     }

//     // If no conflict, save the new appointment in localStorage
//     localStorage.setItem(currentPhone, JSON.stringify({
//       ...formData,
//       time: currentDateTime.toISOString(),
//     }));

//     setModalMessage('Appointment successfully booked!');
//     setIsError(false);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       date: '',
//       time: '',
//     });
//   };

//   return (
//     <div className="appointment-container">
//       <h2>Book an Appointment</h2>
//       <form className="appointment-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="date">Appointment Date</label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="time">Appointment Time</label>
//           <input
//             type="time"
//             id="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-btn">
//           Book Appointment
//         </button>
//       </form>

//       {/* Modal for Confirmation/Error */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-container">
//             <div className="checkmark-icon">
//               {!isError && (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle">
//                   <circle cx="12" cy="12" r="10" stroke="green" strokeWidth="2" fill="none" />
//                   <path d="M9 12l2 2 4-4" stroke="green" strokeWidth="2" fill="none" />
//                 </svg>
//               )}
//               {isError && (
//                 <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
//                   <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
//                   <path d="M9 9l6 6M15 9l-6 6" stroke="red" strokeWidth="2" fill="none" />
//                 </svg>
//               )}
//             </div>
//             <h3>{modalMessage}</h3>
//             <button className="close-modal-btn" onClick={handleCloseModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AppointmentBooking;


import React, { useState, useEffect } from 'react';
import './AppointmentBooking.css';

function AppointmentBooking() {
  console.log("AppointmentBooking Component Rendered");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',  // Added doctor field
    date: '',
    time: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isError, setIsError] = useState(false);  // Track if it's an error message
  const [doctors, setDoctors] = useState([]); // To store fetched doctors list

  // Fetch the list of doctors from the backend API
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/doctor-view/')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentPhone = formData.phone;
    const currentDateTime = new Date(`${formData.date}T${formData.time}`);

    // Get last appointment from localStorage
    const lastAppointment = JSON.parse(localStorage.getItem(currentPhone));

    if (lastAppointment) {
      const timeDifference = currentDateTime - new Date(lastAppointment.time);
      const oneHourInMs = 1000 * 60 * 60;  // 1 hour in milliseconds

      if (timeDifference < oneHourInMs) {
        // Show error message if appointment is booked within an hour
        setModalMessage('Appointment already booked within the last hour.');
        setIsError(true);
        setShowModal(true);
        return;  // Do not submit the form
      }
    }

    // If no conflict, save the new appointment in localStorage
    localStorage.setItem(currentPhone, JSON.stringify({
      ...formData,
      time: currentDateTime.toISOString(),
    }));

    setModalMessage('Appointment successfully booked!');
    setIsError(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      doctor: '', 
      date: '',
      time: '',
    });
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="doctor">Doctor</label>
          <select
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select a Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.doctor_id} value={doctor.doctor_id}>
                Dr. {doctor.first_name} {doctor.last_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Appointment Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Appointment Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Book Appointment
        </button>
      </form>

      {/* Modal for Confirmation/Error */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="checkmark-icon">
              {!isError && (
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle">
                  <circle cx="12" cy="12" r="10" stroke="green" strokeWidth="2" fill="none" />
                  <path d="M9 12l2 2 4-4" stroke="green" strokeWidth="2" fill="none" />
                </svg>
              )}
              {isError && (
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                  <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
                  <path d="M9 9l6 6M15 9l-6 6" stroke="red" strokeWidth="2" fill="none" />
                </svg>
              )}
            </div>
            <h3>{modalMessage}</h3>
            <button className="close-modal-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentBooking;
