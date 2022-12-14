// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	try {
		const getLike = await prisma.likes.findMany();
		// console.log("user", getLike);
		res.status(200).json(getLike);
	} catch (err) {
		res.status(500).json(err);
	}
}
