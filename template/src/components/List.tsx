import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask, deleteTask } from '../redux/actions/taskCreator';

export default function List() {
  const dispatch = useDispatch();
  const list = useSelector((store: any) => store.task);
  const [description, setDescription] = useState('');
  const [index, setIndex] = useState(0);
  const create = () => dispatch(createTask(description));
  const update = () => dispatch(updateTask(description, index));
  const remove = () => dispatch(deleteTask(description));
  return (
    <main>
      <h1>Tasks</h1>
      <form className="to-do__create-update">
        <input type="text" name="input" value={description} />
        <button type="button">Send</button>
      </form>
      <ul>
        {list.map(() => (
          <li>
            <button className="task__task" type="button">{toDo}</button>
            <button className="task__delete" type="button">Delete</button>
          </li>
        ))}
        <button type="button" className="clearAll">Clear all</button>
      </ul>
    </main>
  );
}
