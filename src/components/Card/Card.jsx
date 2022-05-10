import React from 'react';

import './Card.scss';

const Card = (props) => {
  const {
    card: { title = '', status = '', id = '' },
    dispatch,
  } = props;

  const onRemove = (e) => {
    e.stopPropagation();
    dispatch({ type: 'remove', id });
  };

  const onDragStart = (e) => {
    e.dataTransfer.setData('taskId', e.target.id);
  };

  return (
    <div
      className={`card ${status}`}
      // onClick={() => dispatch({ type: 'change', id })}
      draggable="true"
      onDragStart={onDragStart}
      id={id}
    >
      <p>{title}</p>
      <button className="remove-task-button" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default Card;
