import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Input from '@/shared/ui/input/index';

export default {
  title: 'Example/FormElements',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    error: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const SInput = Template.bind({});

SInput.args = {
  label: 'Label',
  error: 'The field is required',
};
