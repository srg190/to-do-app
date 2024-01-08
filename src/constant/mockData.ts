interface Task {
  [id: string]: {
    task: string;
    description: string;
    status: "pending" | "success" | "todo" | "process";
    assignDate?: Date;
    modifydate?: Date;
  };
}

export const tasks: Task = {
  jdfg7kj: {
    task: "sfdgasfg",
    description: "hello",
    status: "pending",
    assignDate: new Date(),
    modifydate: new Date(),
  },
  jdfguyd: {
    task: "sdhfsdh9",
    description: "Bye",
    status: "success",
    assignDate: new Date(),
    modifydate: new Date(),
  },
  edrt7kj: {
    task: "sfdgasdhsfg",
    description: "hello Miss",
    status: "todo",
    assignDate: new Date(),
    modifydate: new Date(),
  },
  pgudfgyd: {
    task: "sdhfdgh9",
    description: "Bye Mister",
    status: "process",
    assignDate: new Date(),
    modifydate: new Date(),
  },
};



// const status = "pending" | "success" | "todo" | "process";
