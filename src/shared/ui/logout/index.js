'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const bi_1 = require('react-icons/bi');
const react_router_dom_1 = require('react-router-dom');
const button_1 = __importDefault(require('@/shared/ui/button'));
const Logout = () => {
  const navigate = (0, react_router_dom_1.useNavigate)();
  const logoutHandler = () => {
    localStorage.removeItem('loginData');
    navigate('/login');
  };
  return react_1.default.createElement(
    button_1.default,
    { variant: 'outlined', className: 'btn-icon', onClick: logoutHandler, 'data-testid': 'logout' },
    react_1.default.createElement(bi_1.BiLogOut, null),
  );
};
exports.default = Logout;
