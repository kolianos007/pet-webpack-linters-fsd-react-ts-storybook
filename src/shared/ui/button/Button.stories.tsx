import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BlackBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BlackBtn.args = {
  color: 'black',
  children: 'Example Button',
};

export const RedBtn = Template.bind({});
RedBtn.args = {
  color: 'red',
  children: 'Example Button',
};

export const BigBtn = Template.bind({});
BigBtn.args = {
  color: 'red',
  big: true,
  children: 'Example Button',
};
