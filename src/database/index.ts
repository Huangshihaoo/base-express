/*
 * @Author: haoo
 * @Date: 2024-08-10 16:54:29
 * @LastEditTime: 2024-08-14 11:42:20
 * @LastEditors: haoo
 * @Description: 数据库链接文件
 * @FilePath: /express/src/database/index.ts
 */
import dotenv from "dotenv";
import { DatabaseType, DataSource } from "typeorm";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) // 环境变量

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
          entities: ["src/entity/*.ts"],
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
}

export default Database;