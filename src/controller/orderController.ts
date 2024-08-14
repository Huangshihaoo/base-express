/*
 * @Author: haoo
 * @Date: 2024-08-10 17:50:17
 * @LastEditTime: 2024-08-14 11:46:47
 * @LastEditors: haoo
 * @Description: 用户操作
 * @FilePath: /express/src/controller/orderController.ts
 */
import { Request, Response } from "express";
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