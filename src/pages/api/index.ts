import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return res.status(200).json({
        message: `Server is running ✅`,
        env: process.env.NODE_ENV,
        error: false,
      });

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
