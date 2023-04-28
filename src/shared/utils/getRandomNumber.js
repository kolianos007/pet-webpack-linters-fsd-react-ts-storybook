"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = void 0;
const getRandomNumber = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.getRandomNumber = getRandomNumber;
