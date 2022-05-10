import React, { useState } from 'react';

// Styles
import './NewTaskModal.scss';

const NewTaskModal = (props) => {
  const { visible, onClose, dispatch } = props;

  // States
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: text,
      status: 'todo',
      id: Math.random() * 10,
    };

    dispatch({ type: 'add', newTask });
    onClose(false);
  };

  return (
    <div id="myModal" class={`modal ${visible ? 'modal-visible' : ''}`}>
      <div class="modal-content">
        <span class="close" onClick={() => onClose(false)}>
          &times;
        </span>
        <div className="form-field">
          <h3>Add Task</h3>
          <input
            type="text"
            placeholder="Task description"
            className="task-input-field"
            name="task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="task-submit-button"
            onClick={onSubmit}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
