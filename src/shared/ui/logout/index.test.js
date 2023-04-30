"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_2 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const index_1 = require("@/pages/index");
const utils_1 = require("@/shared/utils");
describe('Test Logout component', () => {
    (0, utils_1.localStorageMockForTest)();
    test('Test logout on click', () => {
        const removeItemSpy = jest.spyOn(localStorage, 'removeItem');
        (0, react_1.render)(react_2.default.createElement(react_router_dom_1.MemoryRouter, { initialEntries: ['/home'] },
            react_2.default.createElement(react_router_dom_1.Routes, null,
                react_2.default.createElement(react_router_dom_1.Route, { index: true, path: '/home', element: react_2.default.createElement(index_1.Home, null) }),
                react_2.default.createElement(react_router_dom_1.Route, { path: '/login', element: react_2.default.createElement(index_1.Login, null) }))));
        const button = react_1.screen.getByTestId('logout');
        expect(button).toBeInTheDocument();
        react_1.fireEvent.click(button);
        expect(removeItemSpy).toBeCalledWith('loginData');
        expect(react_1.screen.getByText(/login/i, { selector: 'button' })).toBeInTheDocument();
    });
});
