import dotenv from 'dotenv'
dotenv.config()

import ormConfig from './config/typeorm.config'
import "reflect-metadata"
import { createConnection } from "typeorm"
import express from "express"

(async () => {
    await createConnection(ormConfig)
    const app = express()

    app.listen(8080, () => console.log("Listening on http://localhost:8080"))
})()
