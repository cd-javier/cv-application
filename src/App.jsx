import './App.css';
import { useState } from 'react';
import CVRender from './CVRender';
import { Input, GeneralInfo, EduExperience, ProExperience } from './form-components';

const cvStructure = {
  info: {
    name: 'Name',
    phone: 'Phone Number',
    email: 'email',
    website: 'website',
  },
  education: [
    {
      id: 0,
      school: 'School Name',
      title: 'Title',
      date: '20-20-20',
      details: 'Details',
    },
  ],
  experience: [
    {
      id: 0,
      company: 'OS',
      position: 'GM',
      dateFrom: '20-20',
      dateTo: '20-21',
      details: '- Blobloblo blobloblo',
    },
  ],
  skills: ['one', 'two', 'three'],
};

function App() {
  const [cv, setCv] = useState({
    info: {
      name: '',
      phone: null,
      email: null,
      website: null,
    },
    education: [],
    experience: [],
    skills: [],
  });

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

  return (
    <>
      <form>
        <GeneralInfo handleRender={handleGeneralRender} />
        <EduExperience handleRender={handleEduRender} />
        <ProExperience handleRender={handleProRender}/>
        <fieldset>
          <legend>Skills</legend>
          <ul>
            <Input type="text" id="skills" />
          </ul>
        </fieldset>
      </form>
      <CVRender cv={cv} />
    </>
  );
}

export default App;
