/*
 * @Author: haoo
 * @Date: 2024-08-10 17:57:54
 * @LastEditTime: 2024-08-12 10:29:16
 * @LastEditors: haoo
 * @Description: 用户数据处理
 * @FilePath: /express/src/service/orderService.ts
 */
import { Repository } from "typeorm";
import { User } from "../entity/userEntity";
import { AppDataSource } from "../database";
import { Order } from "../entity/orderEntity";

export class OrderService {
    private orderSource: Repository<Order>
    constructor() {
        this.orderSource = AppDataSource.getRepository(Order);
    }

    create() {
        const order = this.orderSource.create({
            type: '1',
            status: '1'
        })
        return this.orderSource.save(order)
    }

    getOrderList = async () => {
        const orderList = await this.orderSource.find()
        return orderList
    }
}