import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Form from '@/shared/ui/form/index';

export default {
  title: 'Example/FormElements',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const SForm = Template.bind({});
