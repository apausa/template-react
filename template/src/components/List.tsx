/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';

export default function List() {
  const list = useSelector((store: any) => store.task);
  if (!list) return (<h2>Write some tasks</h2>);
  return (
    <main>
      <ul>
        {list.map(() => (
          <li className="task">
            {list}
          </li>
        ))}
        <button type="button" className="clearAll">Clear all</button>
      </ul>
    </main>
  );
}

/*
            <button className="task__description" type="button" value="first" />
            <button className="task__delete" type="button">Delete</button>
            */
