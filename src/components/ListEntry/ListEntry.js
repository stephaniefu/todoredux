import React from 'react';
import { Completed, Incomplete } from './styles';

const ListEntry = ({ todo, onClick }) => {
  return (
    <div onClick={() => onClick(todo.id)}>
      { todo.completed ? <Completed>{todo.title}</Completed> : <Incomplete>{todo.title}</Incomplete> }
    </div>
  );
};

export default ListEntry;



