/*
 * @Author: haoo
 * @Date: 2024-08-10 16:54:29
 * @LastEditTime: 2024-08-11 19:10:50
 * @LastEditors: haoo
 * @Description: 数据库链接文件
 * @FilePath: /express/src/database/index.ts
 */
import dotenv from "dotenv";
import { DatabaseType, DataSource } from "typeorm";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string,10),
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true,
    connectorPackage: 'mysql2'
})

export const initializeDataSource = async () => {
    try {
      await AppDataSource.initialize();
      console.log('数据库链接成功!');
    } catch (error) {
      console.error('数据库链接失败了', error);
      throw error;
    }
  };