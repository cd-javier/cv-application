import './App.css';
import { useState } from 'react';
import CVRender from './CVRender';
import html2pdf from 'html2pdf.js';
import {
  GeneralInfo,
  EduExperience,
  ProExperience,
  Skills,
} from './form-components';

const blankCv = {
  info: {
    name: 'Full Name',
    phone: '07123 4567890',
    email: 'email@domain.com',
    website: 'www.website.com',
  },
  education: [],
  experience: [],
  skills: [],
};

function App() {
  const [cv, setCv] = useState(blankCv);

  function handleGeneralRender(data) {
    setCv({ ...cv, info: data });
  }

  function handleEduRender(data) {
    setCv({ ...cv, education: data });
  }

  function handleProRender(data) {
    setCv({ ...cv, experience: data });
  }

  function handleSkillsRender(data) {
    setCv({ ...cv, skills: data });
  }

  function handlePrint(e) {
    e.preventDefault();
    if (confirm('Are you ready to print?')) {
      const element = document.querySelector('.cv-render');
      element.classList.add('pdf-preview');

      html2pdf()
        .set({
          margin: 0,
          filename: 'cv.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        })
        .from(element)
        .save()
        .then(() => {
          element.classList.remove('pdf-preview');
        });
    }
  }

  return (
    <div className="app">
      <form>
        <GeneralInfo handleRender={handleGeneralRender} />
        <EduExperience handleRender={handleEduRender} />
        <ProExperience handleRender={handleProRender} />
        <Skills handleRender={handleSkillsRender} />
        <button onClick={handlePrint} className="print-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>download</title>
            <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
          </svg>
          Download
        </button>
      </form>
      <CVRender cv={cv} />
    </div>
  );
}

export default App;
