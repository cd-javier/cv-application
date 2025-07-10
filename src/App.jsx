import './App.css';
import { useState } from 'react';
import CVRender from './CVRender';
import {
  Input,
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
    const newCv = { ...cv };
    newCv.info = data;
    setCv(newCv);
  }

  function handleEduRender(data) {
    const newCv = { ...cv };
    newCv.education = data;
    setCv(newCv);
  }

  function handleProRender(data) {
    const newCv = { ...cv };
    newCv.experience = data;
    setCv(newCv);
  }

  function handleSkillsRender(data) {
    const newCv = { ...cv };
    newCv.skills = data;
    setCv(newCv);
  }

  return (
    <div className="app">
      <form>
        <GeneralInfo handleRender={handleGeneralRender} />
        <EduExperience handleRender={handleEduRender} />
        <ProExperience handleRender={handleProRender} />
        <Skills handleRender={handleSkillsRender} />
      </form>
      <CVRender cv={cv} />
    </div>
  );
}

export default App;
