import React, {FC, ChangeEvent, useState} from 'react';
import {ITask} from './Interfaces';
import './App.css';
import TodoTask from './Components/Todo';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }

  }

  const addTask = (): void => {
    const newTask = {
      taskName:task, deadline
    }
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type="text" value={task} placeholder='Task' onChange={handleChange} name="task" />
          <input type="number" value={deadline} placeholder='Deadline in days' onChange={handleChange} name="deadline " />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div className='todoList'>
        {
          todoList.map((task: ITask, key: number)=>{
            return <TodoTask key={key} task={task} completeTask={completeTask} />
          })
        }
      </div>
    </div>
  );
}

export default App;
