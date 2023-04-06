import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Login } from '@/pages/index';

export default {
  title: 'Example/Page',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const DefaultLogin = Template.bind({});
