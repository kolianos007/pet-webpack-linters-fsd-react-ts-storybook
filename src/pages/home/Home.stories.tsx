import './styles.css';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Home } from '@/pages/index';

export default {
  title: 'Example/Pages',
  component: Home,
  argTypes: {
    withHeader: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const HomePage = Template.bind({});

HomePage.args = {
  withHeader: true,
};
