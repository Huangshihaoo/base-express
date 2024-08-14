/*
 * @Author: haoo
 * @Date: 2024-08-14 15:57:13
 * @LastEditTime: 2024-08-14 15:57:36
 * @LastEditors: haoo
 * @Description: 
 * @FilePath: /express/utils/normalizePort.ts
 */
export function normalizePort(val: string): number | string | boolean {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
