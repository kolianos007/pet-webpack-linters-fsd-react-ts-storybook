import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Registration } from '@/pages/index';

export default {
  title: 'Example/Pages',
  component: Registration,
  parameters: {
    layout: 'centered',
    storyRouter: {
      path: '/registration',
    },
    reactRouter: {
      routePath: '/registration',
    },
  },
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = (args) => <Registration {...args} />;

export const RegistrationPage = Template.bind({});

RegistrationPage.parameters = {
  storyRouter: {
    path: '/registration',
  },
};
