'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const react_router_dom_1 = require('react-router-dom');
const ProtectedRoute_1 = __importDefault(require('@/app/routes/ProtectedRoute'));
const UnauthenticatedRoute_1 = __importDefault(require('@/app/routes/UnauthenticatedRoute'));
const index_1 = require('@/pages/index');
const router = (0, react_router_dom_1.createBrowserRouter)([
  {
    element: react_1.default.createElement(ProtectedRoute_1.default, null),
    children: [
      {
        path: '/',
        element: react_1.default.createElement(index_1.Home, null),
      },
    ],
  },
  {
    element: react_1.default.createElement(UnauthenticatedRoute_1.default, null),
    children: [
      {
        path: '/login',
        element: react_1.default.createElement(index_1.Login, null),
      },
      {
        path: '/registration',
        element: react_1.default.createElement(index_1.Registration, null),
      },
    ],
  },
]);
exports.default = router;
