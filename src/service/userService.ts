/*
 * @Author: haoo
 * @Date: 2024-08-10 17:57:54
 * @LastEditTime: 2024-08-12 09:54:56
 * @LastEditors: haoo
 * @Description: 用户数据处理
 * @FilePath: /express/src/service/userService.ts
 */
import { Repository } from "typeorm";
import { User } from "../entity/userEntity";
import { AppDataSource } from "../database";

export class UserService {
    private userSource:  Repository<User>
    constructor() {
        this.userSource =  AppDataSource.getRepository(User);
    }

    getUserList = async () => {
        const userList = await this.userSource.find()
        return userList
    }
}