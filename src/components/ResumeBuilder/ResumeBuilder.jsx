import React from 'react';
import './ResumeBuilder.css'; 
import SkillInput from '../SkillInput/SkillInput';

const ResumeBuilder = () => {
  return (
    <div className="resume-builder">
      <div className="header">
        <div className="back-button">&#8592;</div>
        <button className="save-exit-button">Save and Exit</button>
      </div>
      <div className="progress-bar"></div>
      <div className="question">
      <p>Build your resume (3 of 4)</p>
        <h4>Do you want to share some of your skills?</h4>
        <p>we recommend adding at least 6 skills</p>
      </div>
      <SkillInput/>
      
    </div>
  );
};

export default ResumeBuilder;
