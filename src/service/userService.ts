/*
 * @Author: haoo
 * @Date: 2024-08-10 17:57:54
 * @LastEditTime: 2024-08-14 15:52:41
 * @LastEditors: haoo
 * @Description: 用户数据处理
 * @FilePath: /express/src/service/userService.ts
 */
import { Repository } from "typeorm";
import { User } from "../entity/userEntity";
import Database from "../database";

export class UserService {
    // Database.getInstance().dataSource.getRepository(User);
    private userSource: Repository<User>
    constructor() {
        const db = Database.getInstance()
        this.userSource =  db.dataSource.getRepository(User)
    }

    getUserList = async () => {
        const userList = await this.userSource.find()
        return userList
    }
}