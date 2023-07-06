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
        return res.status(200).json(result);
      } catch (e: any) {
        console.log(e);
        return res.status(500).json({
          error: e.toString(),
        });
      }

    case "POST":
      try {
        const result = await createTask(req.body);
        return res.status(201).json(result);
      } catch (e: any) {
        console.log(e);
        return res.status(500).json({
          error: e.toString(),
        });
      }

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
