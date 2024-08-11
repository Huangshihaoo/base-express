/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-10 17:30:01
 * @LastEditors: haoo
 * @Description: 用户表
 * @FilePath: /express/src/entity/user.entity.ts
 */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}