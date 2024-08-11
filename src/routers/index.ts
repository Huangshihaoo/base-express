/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-11 19:12:55
 * @LastEditors: haoo
 * @Description: 路由集合
 * @FilePath: /express/src/routers/index.ts
 */
import express, { Application, Express } from "express";
import path from 'path'
import userRouters from './module/user'

export interface RouterItem {
    method: 'get' | 'post' | 'put' | 'delete';
    path: string,
    handler: any
}

const routeBind = (prefix: string, routers: RouterItem[]) => {
    const router = express.Router();
    routers.forEach((item: RouterItem) => {
        router[item.method](path.join(prefix, item.path), item.handler)
    })
    return router
}


export default function (app: Express) {
    // app.use('/api', Router())
    app.use('/api', routeBind('/user', userRouters))
}