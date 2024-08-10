import express from 'express'
import routerRegister from './routers'
import dotenv from 'dotenv'
import * as bodyParser from "body-parser";


dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

const { PORT } = process.env

const app = express()
app.use(bodyParser.json())

// 注册路由
routerRegister(app);


app.listen(PORT, () => {
    console.log(`running port ${PORT} ...`);
})