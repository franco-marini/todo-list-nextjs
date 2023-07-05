import clientPromise from "@/lib/mongoose";
import TaskModel, { ITask } from "./task.model";

export async function getTask(id: string): Promise<{ data: ITask } | null> {
  await clientPromise;
  const data = await TaskModel.findById<ITask>({ _id: id });

  if (data) {
    return {
      data,
    };
  }

  return null;
}

export async function getTasks(): Promise<{ data: ITask[] }> {
  await clientPromise;
  const data = await TaskModel.find<ITask>();

  return {
    data,
  };
}

export async function createTask(
  newTask: ITask
): Promise<{ data: ITask } | null> {
  await clientPromise;

  const taskCreated = new TaskModel<ITask>(newTask);
  await taskCreated.save();

  if (taskCreated) {
    return {
      data: taskCreated,
    };
  }

  return null;
}
