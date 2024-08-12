/*
 * @Author: haoo
 * @Date: 2024-08-12 09:58:33
 * @LastEditTime: 2024-08-12 11:08:01
 * @LastEditors: haoo
 * @Description: 
 * @FilePath: /express/src/routers/module/order.ts
 */
import { RouterItem } from '..';
import { OrderController } from '../../controller/orderController';

const orderController = new OrderController()

const routers: RouterItem[] = [
    {
        method: 'get',
        path: '/',
        handler: orderController.getUserList.bind(orderController)
    }
]

export default routers
