export interface ITask {
  taskName: string;
  deadline?: number; // make the type optional
}

export interface IInput {
  readonly type: "text" | "number"; // use literal types with readonly signature
  readonly placeholder: "Task" | "Deadline in days"; // use literal types with readonly signature
  readonly name: "task" | "deadline"; // use literal types with readonly signature
}
