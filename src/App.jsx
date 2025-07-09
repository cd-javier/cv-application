import './App.css';
import CVRender from './CVRender';

const cvStructure = {
  info: {
    name: 'Javier Quiroga',
    phone: '07413 174457',
    email: 'contact@javierquiroga.com',
    website: 'www.javierquiroga.com',
  },
  education: [
    {
      school: 'Uni',
      title: 'UX Design',
      date: '20-20-20',
      details: '-Blablabla, Blablabla blablabla',
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
  return (
    <>
      <CVRender cv={cvStructure} />
    </>
  );
}

export default App;
