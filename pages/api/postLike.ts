// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	try {
		// const { userId, post } = req.body;
    // console.log(userId, post);
    const saveLiked = await prisma.likes.create({
      data:req.body.data
    })
    
		res.status(200).json(saveLiked);
	} catch (err) {
		res.status(500).json(err);
	}
}
