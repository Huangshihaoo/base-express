/*
 * @Author: haoo
 * @Date: 2024-08-14 11:49:10
 * @LastEditTime: 2024-08-14 11:54:58
 * @LastEditors: haoo
 * @Description: 
 * @FilePath: /express/bin/www.ts
 */
import initApp from '../src/app'
import http from 'http'
import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

const { PORT } = process.env

async function startApp() {
    const app = await initApp()
    const serve = http.createServer(app)
    serve.listen(PORT, () => {
        console.log(`running port ${PORT} ...`);
    })
}

startApp()