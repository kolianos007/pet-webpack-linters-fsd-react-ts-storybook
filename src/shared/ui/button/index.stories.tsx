import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from '@/shared/ui/button/';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
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
  children: 'Screenshot test button',
  variant: 'contained',
  size: 'medium',
  margin: '10px',
  padding: '10px 20px',
  background: 'yellow',
};
