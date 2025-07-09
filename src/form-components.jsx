import { useState } from 'react';

function Input({ label, type, handleOnChange, index, id, isDisabled }) {
  const [value, setValue] = useState('');
  function intHandleOnChange(e) {
    setValue(e.target.value);
    handleOnChange(e);
  }
  return (
    <li>
      <label htmlFor={(index !== undefined ? index + '-' : '') + id}>
        {label}
      </label>
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
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
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
          label="School"
          type="text"
          index={index}
          id="school"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Title Of Study"
          type="text"
          index={index}
          id="title"
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
      {!isDisabled ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      {isDeletable && <button onClick={handleDelete}>Delete</button>}
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
      <button onClick={handleAdd}>+</button>
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
          label="Company"
          type="text"
          index={index}
          id="company"
          isDisabled={isDisabled}
          handleOnChange={handleOnChange}
        />
        <Input
          label="Position"
          type="text"
          index={index}
          id="position"
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
      {!isDisabled ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      {isDeletable && <button onClick={handleDelete}>Delete</button>}
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
      <button onClick={handleAdd}>+</button>
    </fieldset>
  );
}

export { Input, GeneralInfo, EduExperience, ProExperience };
