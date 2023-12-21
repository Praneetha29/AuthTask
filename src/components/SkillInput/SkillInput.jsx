import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './SkillInput.css';

const SkillInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [skills, setSkills] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddSkill = () => {
        if (inputValue.trim() !== '') {
            setSkills((prevSkills) => [inputValue, ...prevSkills]);
            setInputValue('');
        }
    };

    const handleDeleteSkill = (index) => {
        setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
    };

    return (
        <div className="skill-input-container">
      <div className="added-skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
            <FontAwesomeIcon
              icon={farTrashAlt}
              className="delete-icon"
              onClick={() => handleDeleteSkill(index)}
            />
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a skill"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddSkill} className='addcont'>
          <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
        </button>
      </div>
      <div className='divider'></div>
      <div className="submit-button-container">
        <button className="subButton">
          Submit
        </button>
      </div>
    </div>
            );
        };

export default SkillInput;
