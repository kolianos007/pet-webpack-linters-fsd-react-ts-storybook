"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const index_1 = __importDefault(require("@/app/index"));
const rootElement = document.getElementById('root');
const root = (0, client_1.createRoot)(rootElement);
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(index_1.default, null)));
