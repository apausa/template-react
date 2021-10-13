import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/actions/taskCreator';

export default function Write() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const handleOnChange = ({ target: { value } }: any) => setDescription(value);
  const handleOnKey = ({ target: { value }, which }: any) => {
    if (which !== 13 || !value) return;
    const task = { description, state: false, date: Date.now() };
    dispatch(createTask(task));
    setDescription('');
  };

  return (
    <>
      <h1>Tasks</h1>
      <input
        type="text"
        name="input"
        placeholder="Write your task!"
        value={description}
        onChange={handleOnChange}
        onKeyPress={handleOnKey}
      />
    </>
  );
}
