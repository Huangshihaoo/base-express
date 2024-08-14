import http from 'http'
import initApp from '../src/app'
import { normalizePort } from '../utils'
import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

async function startServer() {
    const app = await initApp()
    const server = http.createServer(app)
    const port = normalizePort(process.env.PORT || '3000')
    server.listen(port, () => {
        console.log('server is running at URL_ADDRESS', port)
    })
}

startServer();