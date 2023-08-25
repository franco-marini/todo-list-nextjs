import type { NextApiRequest, NextApiResponse } from "next";

import { getTasks, createTask } from "@/server/task/task.controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const result = await getTasks();
        if (result.length > 0) {
          return res.status(200).json({
            message: "Successfully get all the tasks.",
            hasError: false,
            data: result,
          });
        }
        return res.status(404).json({
          message: "Tasks not found.",
          hasError: true,
          data: [],
        });
      } catch (e: any) {
        console.log(e);
        return res.status(500).json({
          message: "There was an error.",
          hasError: true,
          error: e.toString(),
        });
      }

    case "POST":
      try {
        const result = await createTask(req.body);
        return res.status(201).json({
          message: "Successfully created a task.",
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
