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

export { Input, GeneralInfo };
