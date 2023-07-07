import { ITask } from "@/server/task/task.model";

export interface ITaskProps extends Omit<ITask, "_id"> {}
