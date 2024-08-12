/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-12 11:16:17
 * @LastEditors: haoo
 * @Description: 
 * @FilePath: /express/src/main.ts
 */
import express, { NextFunction, Request, Response } from 'express'
import routerRegister from './routers'
import dotenv from 'dotenv'
import * as bodyParser from "body-parser";
import { initializeDataSource } from './database';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

const { PORT } = process.env

const app = express()
app.use(bodyParser.json())
app.use((err: Error,req: Request, res: Response, next: NextFunction) => {
    console.log(err, '878978');
    res.send('error')
})
// 注册路由
initializeDataSource().then(() => {
    routerRegister(app); // 注册路由
 
    app.listen(PORT, () => {
        console.log(`running port ${PORT} ...`);
    })
})

