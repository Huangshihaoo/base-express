/*
 * @Author: haoo
 * @Date: 2024-08-14 16:11:45
 * @LastEditTime: 2024-08-14 16:22:47
 * @LastEditors: haoo
 * @Description: utils工具模块测试文件
 * @FilePath: /express/tests/utils.test.ts
 */

import { normalizePort } from "../utils";
describe('utils工具模块测试', () => {
    it('端口格式化函数测试', async () => {
        expect(normalizePort('3000')).toBe(3000);
        expect(normalizePort('aa')).toBe('aa');
        expect(normalizePort('0.01')).toBe(0);
        expect(normalizePort('-100')).toBe(false);
    });
});