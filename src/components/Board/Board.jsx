import React, { useReducer, useState, useMemo } from 'react';
import _ from 'lodash';

// Components
import Slate from '../Slate/Slate';
import NewTaskModal from '../NewTaskModal/NewTaskModal';

// Constants
import { statusList } from '../../constants/status';

// Mocks
import { taskList } from '../../mocks/taskList';

// Styles
import './Board.scss';

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [...state, action.newTask];
    }

    case 'change': {
      const index = _.findIndex(state, (task) => task.id == action.id);
      state[index].status = action.nextState;
      return [...state];
    }

    case 'remove': {
      const newList = state.filter((task) => task.id !== action.id);
      return [...newList];
    }

    default:
      return state;
  }
}

const Board = () => {
  // States
  const [isOpen, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Reducers
  const [state, dispatch] = useReducer(reducer, taskList);

  // Memo
  const filteredTaskList = useMemo(() => {
    return state.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="board">
      <div className="action">
        <button className="add-task-button" onClick={() => setOpen(true)}>
          Add New Task
        </button>
        <input
          className="search"
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="slate-container">
        {statusList.map((status) => {
          return (
            <Slate
              status={status}
              taskList={filteredTaskList}
              dispatch={dispatch}
            />
          );
        })}
      </div>

      <NewTaskModal visible={isOpen} onClose={setOpen} dispatch={dispatch} />
    </div>
  );
};

export default Board;
