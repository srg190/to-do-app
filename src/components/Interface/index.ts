export interface Task {
  [id: string]: {
    task: string;
    description: string;
    status: "pending" | "success" | "todo" | "process";
    assignDate?: Date;
    modifydate?: Date;
  };
}
