import { Express } from "express";

import appRouter from './app'

export default function (app: Express) {
    app.use(appRouter.path, appRouter.router)
}