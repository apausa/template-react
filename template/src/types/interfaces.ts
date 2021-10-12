export interface Task {
  description: string,
  status: boolean,
  date: Date;
}

export interface Action {
  type: string,
  task: Task;
  index: number;
}
