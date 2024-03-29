import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Header from '@/widgets/header/index';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['static', 'sticky'],
    },
  },
  logo: {
    control: {
      type: 'text',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultHeader.args = {
  variant: 'static',
  logo: 'https://e7.pngegg.com/pngimages/807/861/png-clipart-naruto-logo-naruto-logo-comics-and-fantasy-naruto.png',
  background: 'transparent',
};
