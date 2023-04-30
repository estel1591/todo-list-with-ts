import React, { FC, ChangeEvent, useState } from "react";
import { ITask, IInput } from "./Interfaces";
import "./App.css";
import TodoTask from "./Components/Todo";

const propsTaskInput: IInput = {
  type: "text",
  placeholder: "Task",
  name: "task",
};

const propsDeadlineInput: IInput = {
  type: "number",
  placeholder: "Deadline in days",
  name: "deadline",
};

const App: FC = () => {
  const [task, setTask] = useState<string>(""); // use simple type
  const [deadline, setDeadline] = useState<number | undefined>(undefined); // use union
  const [todoList, setTodoList] = useState<ITask[]>([]); // use interface

  // use HTMLInputElement
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // Exhaustiveness checking
    switch (event.target.name) {
      case "task":
        setTask(event.target.value);
        break;
      case "deadline":
        setDeadline(Number(event.target.value));
        break;
      default:
        console.log("this type of input does not have any handling function");
    }
  };

  // use void
  const addTask = (): void => {
    const newTask: ITask = {
      taskName: task,
      deadline,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  // set type for arg
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input value={task} onChange={handleChange} {...propsTaskInput} />
          <input
            value={deadline}
            onChange={handleChange}
            {...propsDeadlineInput}
          />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
