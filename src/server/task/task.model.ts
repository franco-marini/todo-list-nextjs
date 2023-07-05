import mongoose, { Types, Model, Schema } from "mongoose";

export interface ITask {
  _id?: Types.ObjectId;
  name: string;
  done?: boolean;
}

const taskSchema = new Schema<ITask, Model<ITask>>({
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default mongoose.models.Task ||
  mongoose.model<ITask>("Task", taskSchema);
