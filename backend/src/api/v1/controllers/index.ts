import { Request, Response } from "express"

export const ping = (_: Request, res: Response): Response => {
	return res.status(200).json({ message: "pong" })
}