import './App.css';
import { useState } from 'react';
import CVRender from './CVRender';
import { Input, GeneralInfo } from './form-components';

const cvStructure = {
  info: {
    name: 'Name',
    phone: 'Phone Number',
    email: 'email',
    website: 'website',
  },
  education: [
    {
      school: 'School Name',
      title: 'Title',
      date: '20-20-20',
      details: 'Details',
    },
  ],
  experience: [
    {
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

  return (
    <>
      <form>
        <GeneralInfo handleRender={handleGeneralRender} />
        <fieldset>
          <legend>Educational Experience</legend>
          <fieldset>
            <ul>
              <Input label="School" type="text" id="school" />
              <Input label="Title of Study" type="text" id="title" />
              <Input label="Date of graduation" type="date" id="date" />
              <Input label="Description" type="textarea" id="details" />
            </ul>
          </fieldset>
        </fieldset>
        <fieldset>
          <legend>Practical Experience</legend>
          <fieldset>
            <ul>
              <Input label="Company" type="text" id="company" />
              <Input label="Position" type="text" id="position" />
              <Input label="From" type="date" id="dateFrom" />
              <Input label="To" type="date" id="dateTo" />
              <Input
                label="Description of the role"
                type="textarea"
                id="details"
              />
            </ul>
          </fieldset>
        </fieldset>
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
