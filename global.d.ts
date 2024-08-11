declare global {
 namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PORT?: string;
        // 你可以根据项目需求添加更多变量
        DB_HOST: string,
        DB_PORT: string,
        DB_USER: string,
        DB_PWD: string,
        DB_NAME: string,
    }
}}