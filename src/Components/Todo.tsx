import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask; // set type for object using interface
  completeTask(taskNameToDelete: string): void; // set type for method
}

// set type for functional component
const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
