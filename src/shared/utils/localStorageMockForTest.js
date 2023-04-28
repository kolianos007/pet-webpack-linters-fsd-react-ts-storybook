"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStorageMockForTest = void 0;
const localStorageMockForTest = () => {
    const store = {};
    const localStorageMock = {
        getItem: jest.fn((key) => store[key] || null),
        setItem: jest.fn((key, value) => (store[key] = value)),
        removeItem: jest.fn((key) => delete store[key]),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    return localStorageMock;
};
exports.localStorageMockForTest = localStorageMockForTest;
