/*
 * @Author: haoo
 * @Date: 2024-08-10 16:40:25
 * @LastEditTime: 2024-08-14 15:39:34
 * @LastEditors: haoo
 * @Description: 用户表
 * @FilePath: /express/src/entity/userEntity.ts
 */
const { Entity, Column, PrimaryGeneratedColumn } = require("typeorm");

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}