import mongoose, { Types, Model, Schema } from "mongoose";

export interface ITask {
  _id?: Types.ObjectId | string;
  name: string;
  isDone: boolean;
}

const taskSchema = new Schema<ITask, Model<ITask>>({
  name: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default mongoose.models.Task ||
  mongoose.model<ITask>("Task", taskSchema);
