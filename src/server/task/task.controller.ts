import clientPromise from "@/lib/mongoose";

import TaskModel, { ITask } from "./task.model";
import mongoose from "mongoose";

export async function getTask(id: string): Promise<ITask | null> {
  await clientPromise;
  const data = await TaskModel.findById<ITask>({ _id: id });

  if (data) {
    return data;
  }

  return null;
}

export async function getTasks(): Promise<ITask[]> {
  await clientPromise;
  const data = await TaskModel.find<ITask>();
  return data;
}

export async function createTask(newTask: ITask): Promise<ITask | null> {
  await clientPromise;

  const taskCreated = new TaskModel<ITask>(newTask);
  await taskCreated.save();

  if (taskCreated) {
    return taskCreated;
  }

  return null;
}

export async function updateTask(
  id: string,
  data: Omit<ITask, "_id">
): Promise<ITask | null> {
  await clientPromise;

  const taskUpdated = await TaskModel.findByIdAndUpdate<ITask>(
    new mongoose.Types.ObjectId(id),
    data
  );

  if (taskUpdated) {
    return taskUpdated;
  }

  return null;
}
