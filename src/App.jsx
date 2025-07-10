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
