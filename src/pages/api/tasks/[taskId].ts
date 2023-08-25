import type { NextApiRequest, NextApiResponse } from "next";

import { getTask, updateTask } from "@/server/task/task.controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const { taskId } = req.query;
        const result = await getTask(String(taskId));
        if (result) {
          return res.status(200).json({
            message: `Successfully get the task with the id: ${taskId}.`,
            hasError: false,
            data: result,
          });
        }
        return res.status(404).json({
          message: `Task with id ${taskId} not found.`,
          hasError: true,
        });
      } catch (e: any) {
        console.log(e);
        return res.status(500).json({
          message: "There was an error.",
          hasError: true,
          error: e.toString(),
        });
      }

    case "PATCH":
      try {
        const { taskId } = req.query;
        const result = await updateTask(String(taskId), req.body);
        return res.status(200).json({
          message: `Successfully updated the task with the id: ${taskId}.`,
          hasError: false,
          data: result,
        });
      } catch (e: any) {
        console.log(e);
        return res.status(500).json({
          message: "There was an error.",
          hasError: true,
          error: e.toString(),
        });
      }

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
