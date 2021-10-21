/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Task } from '../types/interfaces';
import { createTask, renderTask } from '../redux/actions/taskCreator';

export default function List() {
  const list = useSelector(({ taskReducer }: any) => taskReducer);
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const create = ({ target: { value }, which }: any) => {
    if (which !== 13 || !value) return;
    dispatch(createTask({ description, state: false, date: Date.now() }));
    setDescription('');
  };
  // const remove = (whatever: Task) => dispatch(deleteTask(whatever));
  useEffect(() => { renderTask(list); }, [description]);
  return (
    <main>
      <h1>Tasks</h1>
      <input
        type="text"
        name="input"
        placeholder="Write your task!"
        value={description}
        onChange={({ target: { value } }: any) => setDescription(value)}
        onKeyPress={create}
      />
      <ul>
        { (!list) ? (<p>Write your first task!</p>) : list.map((toDo: Task) => (
          <li>
            <form>
              <input
                type="text"
                name="input"
                value={toDo.description}
                disabled
              />
            </form>
          </li>
        ))}
        <button type="button" className="clearAll">Clear all</button>
      </ul>
    </main>
  );
}

/*
onClick={remove(toDo)}
<button type="button">Delete</button>
*/
