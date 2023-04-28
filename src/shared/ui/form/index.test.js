"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_2 = __importDefault(require("react"));
const index_1 = __importDefault(require("@/shared/ui/form/index"));
test('Handles submit event', () => {
    const handleSubmit = jest.fn();
    (0, react_1.render)(react_2.default.createElement(index_1.default, { onSubmit: handleSubmit, "data-testid": "form" },
        react_2.default.createElement("button", { type: "submit" }, "Submit")));
    react_1.fireEvent.submit(react_1.screen.getByTestId('form'));
    expect(handleSubmit).toHaveBeenCalled();
});
