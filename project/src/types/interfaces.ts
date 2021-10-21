export interface Task {
  description: string | undefined,
  state: boolean,
  date: number;
}

export interface Action {
  type: string,
  task: Task;
  list: Task[];
  index: number;
}
