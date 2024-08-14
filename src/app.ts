/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-14 16:01:32
 * @LastEditors: haoo
 * @Description: 
 * @FilePath: /express/src/app.ts
 */
import express from 'express'
import routerRegister from './routers'
import * as bodyParser from "body-parser";
import Database from './database';

async function initApp() {

    const app = express()
    app.use(bodyParser.json())
    // 注册路由
    await Database.getInstance().initialize()

    routerRegister(app); // 注册路由
    return app
}

export default initApp;
