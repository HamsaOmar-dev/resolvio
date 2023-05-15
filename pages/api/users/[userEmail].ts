import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGet(req, res);
  } else if (req.method === "POST") {
    handlePost(req, res);
  } else {
    res.status(405).send({ message: "Method not allowed" });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const userEmail = req.query.userEmail?.toString();
    await prisma.email
      .findUnique({
        where: { email: userEmail },
      })
      .then((data: any) => {
        res.json(data);
        console.log("User has been Found");
      })
      .catch((err: any) => console.log(err));
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const userEmail = req.query.userEmail?.toString();
    await prisma.email
      .delete({
        where: { email: userEmail },
      })
      .then(() => {
        res.json("User has been Deleted");
        console.log("User has been Deleted");
      })
      .catch((err: any) => console.log(err));
}
