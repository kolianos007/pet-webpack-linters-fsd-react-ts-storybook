import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Registration } from '@/pages/index';

export default {
  title: 'Example/Pages',
  component: Registration,
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = (args) => <Registration {...args} />;

export const DefaultRegistration = Template.bind({});
