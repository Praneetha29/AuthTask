import React, { useState } from 'react';
import './ChecklistForm.css'; 

const ChecklistForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.includes(option);
    setSelectedOptions((prevOptions) =>
      isSelected
        ? prevOptions.filter((selected) => selected !== option)
        : [...prevOptions, option]
    );
  };

  const handleContinue = () => {
    console.log('Selected Options:', selectedOptions);
  };

  return (
    <div className='formcomp'>
      <h2 className="form-header">Thank you for submitting your job proposal.</h2>
      <h4 className="form-subheader">
        We will be updating you as job seekers apply for this position.
      </h4>
      <div className="checklist-form">
        <div className="question">Do you want to ask the applicants any of the following questions?</div>
        <div className="options">
          {[1, 2, 3, 4, 5, 6].map((option) => (
            <div key={option} className="option">
              <input
                type="checkbox"
                id={`option-${option}`}
                name={`option-${option}`}
                value={`Option ${option}`}
                checked={selectedOptions.includes(`Option ${option}`)}
                onChange={() => handleOptionChange(`Option ${option}`)}
              />
              <label htmlFor={`option-${option}`}>
                {option === 1
                  ? 'Ask more about the applicant\'s spoken languages'
                  : option === 2
                  ? 'Ask more about the applicant\'s work experience'
                  : option === 3
                  ? 'Ask more about the applicant\'s skills'
                  : option === 4
                  ? 'Ask more about the applicant\'s education'
                  : option === 5
                  ? 'Ask the applicant for 2-3 time-slots when they would be available for an interview'
                  : option === 6
                  ? 'Create a custom question to ask the applicant'
                  : `Option ${option}`}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button className="contButton" onClick={handleContinue} disabled={selectedOptions.length === 0}>
        Continue
      </button>
    </div>
  );
};

export default ChecklistForm;
