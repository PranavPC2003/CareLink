import React, { useState } from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// List of available forms (can be extended with more diseases)
const formsList = [
  { name: 'Hypertension', path: '/forms/HypertensionForm' },
  { name: 'Diabetes', path: '/forms/DiabetesForm' },
  { name: 'Asthma', path: '/forms/AsthmaForm' },
  // Add other disease forms here
];

function FormsDropdown() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter the forms based on search query
  const filteredForms = formsList.filter(form =>
    form.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dropdown className="nav-item">
      <Dropdown.Toggle variant="link" id="forms-dropdown" className="nav-link text-white">
        Forms
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-dark">
        {/* Search input field */}
        <FormControl
          type="text"
          placeholder="Search forms"
          className="mb-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  // Update search query on change
        />
        
        {/* Dynamically render dropdown items based on the filtered forms */}
        {filteredForms.length > 0 ? (
          filteredForms.map((form, index) => (
            <Dropdown.Item key={index} as={Link} to={form.path}>
              {form.name}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item disabled>No forms found</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FormsDropdown;
