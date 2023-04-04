import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['contained', 'outlined'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'big'],
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Btn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Btn.args = {
  color: 'black',
  children: 'Example Button',
  variant: 'contained',
  size: 'medium',
  margin: '10px',
  padding: '10px 20px',
  background: 'yellow',
};
