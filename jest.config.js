/*
 * @Author: haoo
 * @Date: 2024-08-14 16:12:24
 * @LastEditTime: 2024-08-14 16:12:47
 * @LastEditors: haoo
 * @Description: jest测试配置文件
 * @FilePath: /express/jest.config.js
 */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js', 'json'],
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
    },
};