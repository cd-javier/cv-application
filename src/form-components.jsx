import { useState } from 'react';

function Input({ label, type, handleOnChange, index, id, isDisabled }) {
  const [value, setValue] = useState('');
  function intHandleOnChange(e) {
    setValue(e.target.value);
    handleOnChange(e);
  }
  return (
    <li>
      {label && (
        <label htmlFor={(index !== undefined ? index + '-' : '') + id}>
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          value={value}
          disabled={isDisabled}
          id={(index !== undefined ? index + '-' : '') + id}
          type={type}
          onChange={intHandleOnChange}
        ></textarea>
      ) : (
        <input
          value={value}
          disabled={isDisabled}
          id={(index !== undefined ? index + '-' : '') + id}
          type={type}
          onChange={intHandleOnChange}
        />
      )}
    </li>
  );
}

function GeneralInfo({ handleRender }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({});

  function handleOnChange(e) {
    const newData = data;
    newData[e.target.id] = e.target.value ? e.target.value : null;
    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRender(data);
    setIsDisabled(true);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsDisabled(false);
  }

  return (
    <fieldset>
      <legend>General Information</legend>
      <ul>
        <Input
          label="Name"
          type="text"
          id="name"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Phone Number"
          type="phone"
          id="phone"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Email"
          type="email"
          id="email"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Website"
          type="website"
          id="website"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
      </ul>
      {!isDisabled ? (
        <button onClick={handleSubmit}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>check</title>
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
          </svg>
        </button>
      ) : (
        <button onClick={handleEdit}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>pencil</title>
            <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        </button>
      )}
    </fieldset>
  );
}

function SingleEduExperience({
  handleSingleRender,
  handleSingleDelete,
  index,
  isDeletable,
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({});

  function handleOnChange(e) {
    const newData = data;
    newData.id = index;
    newData[e.target.id.split('-')[1]] = e.target.value ? e.target.value : null;
    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSingleRender(data);
    setIsDisabled(true);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsDisabled(false);
  }

  function handleDelete(e) {
    e.preventDefault();
    handleSingleDelete(index);
  }

  return (
    <fieldset>
      <ul>
        <Input
          label="Title Of Study"
          type="text"
          index={index}
          id="title"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="School"
          type="text"
          index={index}
          id="school"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Date of Graduation"
          type="date"
          index={index}
          id="date"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Description"
          type="textarea"
          index={index}
          id="details"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
      </ul>
      <div className="buttons">
        {!isDisabled ? (
          <button onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>check</title>
              <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>
          </button>
        ) : (
          <button onClick={handleEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>pencil</title>
              <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
          </button>
        )}
        {isDeletable && (
          <button onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>delete</title>
              <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
            </svg>
          </button>
        )}
      </div>
    </fieldset>
  );
}

function EduExperience({ handleRender }) {
  const [data, setData] = useState([{ id: 0 }]);

  function handleSingleRender(singleData) {
    const newData = [...data.filter((single) => single.id !== singleData.id)];
    newData.push(singleData);
    newData.sort((a, b) => a.id - b.id);
    setData(newData);
    handleRender(newData);
  }

  function handleSingleDelete(index) {
    const newData = [...data.filter((single) => single.id !== index)];
    setData(newData);
    handleRender(newData);
  }

  function handleAdd(e) {
    e.preventDefault();
    const newData = [...data, { id: Date.now() }];
    setData(newData);
  }

  return (
    <fieldset>
      <legend>Educational Experience</legend>
      {data.map((elm) => (
        <SingleEduExperience
          handleSingleRender={handleSingleRender}
          handleSingleDelete={handleSingleDelete}
          isDeletable={data.length > 1}
          index={elm.id}
          key={elm.id}
        />
      ))}
      <button onClick={handleAdd}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>plus</title>
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      </button>
    </fieldset>
  );
}

function SingleProExperience({
  handleSingleRender,
  handleSingleDelete,
  index,
  isDeletable,
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({});

  function handleOnChange(e) {
    const newData = data;
    newData.id = index;
    newData[e.target.id.split('-')[1]] = e.target.value ? e.target.value : null;
    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSingleRender(data);
    setIsDisabled(true);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsDisabled(false);
  }

  function handleDelete(e) {
    e.preventDefault();
    handleSingleDelete(index);
  }

  return (
    <fieldset>
      <ul>
        <Input
          label="Position"
          type="text"
          index={index}
          id="position"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Company"
          type="text"
          index={index}
          id="company"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="From"
          type="date"
          index={index}
          id="dateFrom"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="To"
          type="date"
          index={index}
          id="dateTo"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Description"
          type="textarea"
          index={index}
          id="details"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
      </ul>
      <div className="buttons">
        {!isDisabled ? (
          <button onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>check</title>
              <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>
          </button>
        ) : (
          <button onClick={handleEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>pencil</title>
              <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
            </svg>
          </button>
        )}
        {isDeletable && (
          <button onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>delete</title>
              <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
            </svg>
          </button>
        )}
      </div>
    </fieldset>
  );
}

function ProExperience({ handleRender }) {
  const [data, setData] = useState([{ id: 0 }]);

  function handleSingleRender(singleData) {
    const newData = [...data.filter((single) => single.id !== singleData.id)];
    newData.push(singleData);
    newData.sort((a, b) => a.id - b.id);
    setData(newData);
    handleRender(newData);
  }

  function handleSingleDelete(index) {
    const newData = [...data.filter((single) => single.id !== index)];
    setData(newData);
    handleRender(newData);
  }

  function handleAdd(e) {
    e.preventDefault();
    const newData = [...data, { id: Date.now() }];
    setData(newData);
  }

  return (
    <fieldset>
      <legend>Practical Experience</legend>
      {data.map((elm) => (
        <SingleProExperience
          handleSingleRender={handleSingleRender}
          handleSingleDelete={handleSingleDelete}
          isDeletable={data.length > 1}
          index={elm.id}
          key={elm.id}
        />
      ))}
      <button onClick={handleAdd}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>plus</title>
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      </button>
    </fieldset>
  );
}

function SingleSkill({
  handleSingleRender,
  handleSingleDelete,
  index,
  isDeletable,
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [data, setData] = useState({});

  function handleOnChange(e) {
    const newData = data;
    newData.id = index;
    newData.skill = e.target.value ? e.target.value : null;
    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSingleRender(data);
    setIsDisabled(true);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsDisabled(false);
  }

  function handleDelete(e) {
    e.preventDefault();
    handleSingleDelete(index);
  }

  return (
    <div className="skill">
      <Input
        type="text"
        index={index}
        id="company"
        isDisabled={isDisabled}
        handleOnChange={handleOnChange}
      />
      {!isDisabled ? (
        <button onClick={handleSubmit}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>check</title>
            <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
          </svg>
        </button>
      ) : (
        <button onClick={handleEdit}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>pencil</title>
            <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
          </svg>
        </button>
      )}
      {isDeletable && (
        <button onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>delete</title>
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
        </button>
      )}
    </div>
  );
}

function Skills({ handleRender }) {
  const [data, setData] = useState([{ id: 0 }]);

  function handleSingleRender(singleData) {
    const newData = [...data.filter((single) => single.id !== singleData.id)];
    newData.push(singleData);
    newData.sort((a, b) => a.id - b.id);
    setData(newData);
    handleRender(newData);
  }

  function handleSingleDelete(index) {
    const newData = [...data.filter((single) => single.id !== index)];
    setData(newData);
    handleRender(newData);
  }

  function handleAdd(e) {
    e.preventDefault();
    const newData = [...data, { id: Date.now() }];
    setData(newData);
  }

  return (
    <fieldset>
      <legend>Skills</legend>
      {data.map((elm) => (
        <SingleSkill
          handleSingleRender={handleSingleRender}
          handleSingleDelete={handleSingleDelete}
          isDeletable={data.length > 1}
          index={elm.id}
          key={elm.id}
        />
      ))}
      <button onClick={handleAdd}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>plus</title>
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
      </button>
    </fieldset>
  );
}

export { Input, GeneralInfo, EduExperience, ProExperience, Skills };
