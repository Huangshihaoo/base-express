/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-14 11:49:04
 * @LastEditors: haoo
 * @Description: 
 * @FilePath: /express/src/main.ts
 */
import express, { NextFunction, Request, Response } from 'express'
import routerRegister from './routers'
import dotenv from 'dotenv'
import * as bodyParser from "body-parser";
import Database from './database';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

const { PORT } = process.env

// app.listen(PORT, () => {
//     console.log(`running port ${PORT} ...`);
// })

async function initApp() {

    const app = express()
    app.use(bodyParser.json())
    // 注册路由
    await Database.getInstance().initialize()

    routerRegister(app); // 注册路由
    return app
}

export default initApp;
