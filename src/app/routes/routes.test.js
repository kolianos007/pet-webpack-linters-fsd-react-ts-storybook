"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_2 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const index_1 = __importDefault(require("@/app/index"));
const index_2 = require("@/pages/index");
const utils_1 = require("@/shared/utils");
describe('Router testing', () => {
    (0, utils_1.localStorageMockForTest)();
    test('Render Outlet when authenticated', () => {
        localStorage.setItem('loginData', JSON.stringify({ username: 'test' }));
        (0, react_1.render)(react_2.default.createElement(index_1.default, null));
        expect(react_1.screen.getByTestId('homepage')).toBeInTheDocument();
    });
    test('Render Login when page unauthenticated', () => {
        localStorage.removeItem('loginData');
        (0, react_1.render)(react_2.default.createElement(react_router_dom_1.MemoryRouter, null,
            react_2.default.createElement(index_2.Login, null)));
        react_1.screen.debug();
        expect(react_1.screen.getByTestId('login')).toBeInTheDocument();
    });
    test('Render page without localStorageData', () => {
        (0, react_1.render)(react_2.default.createElement(react_router_dom_1.MemoryRouter, null,
            react_2.default.createElement(index_2.Login, null)));
        react_1.screen.debug();
        expect(react_1.screen.getByRole('button')).toHaveTextContent(/login/i);
    });
});
