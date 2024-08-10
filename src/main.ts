import express from 'express'
import routerRegister from './routers'
import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

const { PORT } = process.env

const app = express()

// 注册路由
routerRegister(app);


app.listen(PORT, () => {
    console.log(`running port ${PORT} ...`);
})