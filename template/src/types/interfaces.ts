export interface Task {
  description: string,
  state: boolean,
  date: Date;
}

export interface Action {
  type: string,
  task: Task;
  index: number;
}
