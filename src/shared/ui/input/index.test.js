'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = require('@testing-library/react');
const react_2 = __importDefault(require('react'));
const index_1 = __importDefault(require('@/shared/ui/input/index'));
describe('Test Input component', () => {
  const labelText = 'Test label';
  const errorTest = 'Test error';
  const inputValue = 'Test value';
  test('Renders input with label and error', () => {
    (0, react_1.render)(
      react_2.default.createElement(index_1.default, { name: 'test', label: labelText, error: errorTest }),
    );
    const inputElement = react_1.screen.getByLabelText(labelText);
    const errorElement = react_1.screen.getByText(errorTest);
    expect(inputElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
  });
  test('Render only input', () => {
    (0, react_1.render)(react_2.default.createElement(index_1.default, { name: 'test' }));
    expect(react_1.screen.getByRole('textbox')).toBeInTheDocument();
    !expect(react_1.screen.queryByLabelText(labelText));
    !expect(react_1.screen.queryByText(errorTest));
  });
  test('Check input value update', () => {
    (0, react_1.render)(react_2.default.createElement(index_1.default, { name: inputValue }));
    const inputElement = react_1.screen.getByRole('textbox');
    react_1.fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement.value).toBe(inputValue);
  });
});
