/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-12 09:58:20
 * @LastEditors: haoo
 * @Description: 订单表
 * @FilePath: /express/src/entity/orderEntity.ts
 */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    type: string;

    @Column()
    status: string;
}