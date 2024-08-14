/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-14 15:39:03
 * @LastEditors: haoo
 * @Description: 订单表
 * @FilePath: /express/src/entity/orderEntity.ts
 */
const { Entity, Column, PrimaryGeneratedColumn } = require("typeorm");

@Entity()
export class Order {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    type: string;

    @Column()
    status: string;
}