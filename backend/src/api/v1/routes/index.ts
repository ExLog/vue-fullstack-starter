import { ping } from "@api/v1/controllers"
import { Router } from "express"

const router = Router()

router.get("/", ping)

export default router