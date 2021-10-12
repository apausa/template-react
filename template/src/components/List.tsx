/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../redux/actions/taskCreator';

export default function List() {
  const dispatch = useDispatch();
  const list = useSelector((store: any) => store.task);
  const [description, setDescription] = useState('');
  const handleOnChange = ({ target: { value } }: any) => setDescription(value);
  const create = ({ target: { value }, which }: any) => {
    if (which !== 13 || !value) return;
    dispatch(createTask(description));
    setDescription('');
  };

  return (
    <main>
      <h1>Tasks</h1>
      <form className="to-do__create-update">
        <input
          type="text"
          name="input"
          placeholder="Write your task!"
          value={description}
          onChange={handleOnChange}
          onKeyPress={create}
        />

      </form>
      <ul>
        {list.map(() => (
          <li className="task">
            <button className="task__description" type="button" value="first" />
            <button className="task__delete" type="button">Delete</button>
          </li>
        ))}
        <button type="button" className="clearAll">Clear all</button>
      </ul>
    </main>
  );
}
