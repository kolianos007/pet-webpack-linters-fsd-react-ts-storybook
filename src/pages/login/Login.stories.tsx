import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Login } from '@/pages/index';

export default {
  title: 'Example/Pages',
  component: Login,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const LoginPage = Template.bind({});
