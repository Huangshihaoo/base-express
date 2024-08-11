/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-11 19:13:39
 * @LastEditors: haoo
 * @Description: 
 * @FilePath: /express/src/main.ts
 */
import express from 'express'
import routerRegister from './routers'
import dotenv from 'dotenv'
import * as bodyParser from "body-parser";
import { initializeDataSource } from './database';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

const { PORT } = process.env

const app = express()
app.use(bodyParser.json())

// 注册路由
initializeDataSource().then(() => {
    routerRegister(app); // 注册路由
    app.listen(PORT, () => {
        console.log(`running port ${PORT} ...`);
    })
})

