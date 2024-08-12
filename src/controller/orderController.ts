/*
 * @Author: haoo
 * @Date: 2024-08-10 17:50:17
 * @LastEditTime: 2024-08-12 11:15:01
 * @LastEditors: haoo
 * @Description: 用户操作
 * @FilePath: /express/src/controller/orderController.ts
 */
import { Repository } from "typeorm";
import { AppDataSource } from "../database";
import { User } from "../entity/userEntity";
import { Request, Response } from "express";
import { UserService } from "../service/userService";
import { OrderService } from "../service/orderService";

export class OrderController {
  private orderService: OrderService;
  constructor() {
    this.orderService = new OrderService()
  }

  async getUserList(req: Request, res: Response) {
    await this.orderService.create()
    const result = await this.orderService.getOrderList()
    console.log(result,'-=-');
throw new Error('123')
    res.send('aaa')
  }
}
// export default new UserController();