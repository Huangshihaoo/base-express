/*
 * @Author: haoo
 * @Date: 2024-08-10 16:54:29
 * @LastEditTime: 2024-08-14 16:48:01
 * @LastEditors: haoo
 * @Description: 数据库链接文件
 * @FilePath: /express/src/database/index.ts
 */
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Order } from "../entity/orderEntity";
import { User } from "../entity/userEntity";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

const entities = [Order, User];

class Database {
    private static instance: Database;
    public dataSource: DataSource;

    private constructor() {
        this.dataSource = new DataSource({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT as string, 10),
            username: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            entities,
            logging: true,
            synchronize: true,
            connectorPackage: 'mysql2',
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async initialize() {
        if (!this.dataSource.isInitialized) {
            await this.dataSource.initialize();
            console.log('数据库连接已成功初始化');
        }
    }

    // 测试数据库是否联通
    public async isConnection() {
        try {
            await this.dataSource.query('SELECT 1');
            return true;
        } catch (error) {
            return false;
        }
    }

    // 关闭数据库连接
    public async close() {
        await this.dataSource.destroy();
    }
}

export default Database;