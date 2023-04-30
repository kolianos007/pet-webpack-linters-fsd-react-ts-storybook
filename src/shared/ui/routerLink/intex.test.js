'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = require('@testing-library/react');
const react_2 = __importDefault(require('react'));
const react_router_dom_1 = require('react-router-dom');
const index_1 = __importDefault(require('@/shared/ui/routerLink/index'));
describe('Test RouterLink component', () => {
  test('renders link with correct text and navigates to the expected route', async () => {
    const testRoutePath = '/test';
    const testText = 'Test Link';
    (0, react_1.render)(
      react_2.default.createElement(
        react_router_dom_1.MemoryRouter,
        { initialEntries: ['/'] },
        react_2.default.createElement(index_1.default, { to: testRoutePath }, testText),
        react_2.default.createElement(
          react_router_dom_1.Routes,
          null,
          react_2.default.createElement(react_router_dom_1.Route, {
            index: true,
            element: react_2.default.createElement(react_2.default.Fragment, null),
          }),
          react_2.default.createElement(react_router_dom_1.Route, {
            path: testRoutePath,
            element: react_2.default.createElement('div', null, 'Test Route Content'),
          }),
        ),
      ),
    );
    const linkElement = react_1.screen.getByText(testText);
    expect(linkElement).toBeInTheDocument();
    react_1.fireEvent.click(linkElement);
    await (0, react_1.waitFor)(() => {
      const testRouteContent = react_1.screen.getByText('Test Route Content');
      expect(testRouteContent).toBeInTheDocument();
    });
  });
});
