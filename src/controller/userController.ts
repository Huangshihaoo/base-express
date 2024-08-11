/*
 * @Author: haoo
 * @Date: 2024-08-10 17:50:17
 * @LastEditTime: 2024-08-11 19:24:57
 * @LastEditors: haoo
 * @Description: 用户操作
 * @FilePath: /express/src/controller/userController.ts
 */
import { Repository } from "typeorm";
import { AppDataSource } from "../database";
import { User } from "../entity/userEntity";
import { Request, Response } from "express";
import { UserService } from "../service/userService";

export class UserController {
    private userService: UserService
    constructor() {
      this.userService = new UserService(AppDataSource.getRepository(User))
    }

    async getUserList(req: Request, res: Response) {
       const result = await this.userService.getUserList()
          console.log(result);
          
        res.send('aaa')
    }
}
// export default new UserController();