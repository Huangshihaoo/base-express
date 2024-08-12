/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-12 10:30:03
 * @LastEditors: haoo
 * @Description: 路由集合
 * @FilePath: /express/src/routers/index.ts
 */
import express, { Express } from "express";
import path from 'path'
import userRouters from './module/user'
import orderRouters from './module/order'

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


export default function (app: Express, prefix = '') {
    app.use(prefix, routeBind('/user', userRouters))
    app.use(prefix, routeBind('/order', orderRouters))
}