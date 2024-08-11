/*
 * @Author: haoo
 * @Date: 2024-08-10 17:57:54
 * @LastEditTime: 2024-08-11 19:25:06
 * @LastEditors: haoo
 * @Description: 用户数据处理
 * @FilePath: /express/src/service/userService.ts
 */
import { Repository } from "typeorm";
import { User } from "../entity/userEntity";

export class UserService {
    private userSource:  Repository<User>
    constructor(userSource: Repository<User>) {
        this.userSource = userSource;
    }

    getUserList = async () => {
        const userList = await this.userSource.find()
        console.log(userList);
        return userList
    }
}