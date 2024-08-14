/*
 * @Author: haoo
 * @Date: 2024-08-10 17:50:17
 * @LastEditTime: 2024-08-14 11:46:28
 * @LastEditors: haoo
 * @Description: 用户操作
 * @FilePath: /express/src/controller/userController.ts
 */
import { Repository } from "typeorm";
import { User } from "../entity/userEntity";
import { Request, Response } from "express";
import { UserService } from "../service/userService";

export class UserController {
  private userService: UserService
  constructor() {
    this.userService = new UserService()
  }

  async getUserList(req: Request, res: Response) {
    const result = await this.userService.getUserList()
    console.log(result);

    res.send('bbb')
  }
}
// export default new UserController();