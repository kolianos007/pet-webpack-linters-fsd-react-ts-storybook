'use strict';
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
require('@/widgets/header/styles.css');
const react_1 = __importDefault(require('react'));
const logout_1 = __importDefault(require('@/shared/ui/logout'));
const Header = (_a) => {
  var { variant = 'static', logo, background } = _a,
    props = __rest(_a, ['variant', 'logo', 'background']);
  const loginData = localStorage.getItem('loginData');
  const userName = loginData ? JSON.parse(loginData).username : null;
  const rootClasses = ['header'];
  if (variant) rootClasses.push(`header-${variant}`);
  return react_1.default.createElement(
    'header',
    Object.assign({}, props, { className: rootClasses.join(' '), style: { background } }),
    react_1.default.createElement('img', { src: logo, className: 'logo' }),
    react_1.default.createElement(
      'div',
      { className: 'right-block' },
      react_1.default.createElement('span', { className: 'username' }, userName),
      react_1.default.createElement(logout_1.default, null),
    ),
  );
};
exports.default = Header;
