export interface Task {
  id: number;
  title: string;
  difficulty: number;

  addTaskHandler(): void;

  handleChange(): string;
}
