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
require('./styles.css');
const react_1 = __importDefault(require('react'));
const Button = (_a) => {
  var { children, className = '', onClick, color, variant = 'contained', size, margin, background, padding } = _a,
    props = __rest(_a, [
      'children',
      'className',
      'onClick',
      'color',
      'variant',
      'size',
      'margin',
      'background',
      'padding',
    ]);
  const rootClasses = ['my-btn'];
  if (className) rootClasses.push(className);
  if (variant) rootClasses.push(`btn-${variant}`);
  if (size) rootClasses.push(`btn-${size}`);
  return react_1.default.createElement(
    'button',
    Object.assign({}, props, {
      className: rootClasses.join(' '),
      style: { color, margin, background, padding, borderColor: color },
      onClick: onClick,
    }),
    children,
  );
};
exports.default = Button;
