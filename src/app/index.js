"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@/app/style.css");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const routes_1 = __importDefault(require("@/app/routes"));
const App = () => {
    return react_1.default.createElement(react_router_dom_1.RouterProvider, { router: routes_1.default });
};
exports.default = App;
