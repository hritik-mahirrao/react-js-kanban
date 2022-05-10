import React from 'react';

// Components
import Card from '../Card/Card';

// Constants
import { statusConfig } from '../../constants/status';

// Styles
import './Slate.scss';

const Slate = (props) => {
  const { status = '', taskList = [], dispatch } = props;
  const { title = '' } = statusConfig[status];

  const onDrop = (e) => {
    var taskId = e.dataTransfer.getData('taskId');
    dispatch({ type: 'change', id: taskId, nextState: status });
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={status} className="slate" onDrop={onDrop} onDragOver={onDragOver}>
      <p className="title">{title}</p>
      <div>
        {taskList
          .filter((card) => card.status === status)
          .map((card) => {
            return <Card card={card} dispatch={dispatch} />;
          })}
      </div>
    </div>
  );
};

export default Slate;
