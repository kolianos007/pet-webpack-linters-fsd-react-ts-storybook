"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = exports.Login = exports.Home = void 0;
const home_1 = __importDefault(require("@/pages/home"));
exports.Home = home_1.default;
const login_1 = __importDefault(require("@/pages/login"));
exports.Login = login_1.default;
const registration_1 = __importDefault(require("@/pages/registration"));
exports.Registration = registration_1.default;
