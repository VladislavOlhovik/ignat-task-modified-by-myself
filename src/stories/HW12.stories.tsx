import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HW12 from '../p2-homeworks/h12/HW12';
import { ReduxStoreProvider } from './ReduxStoreProvider';

export default {
  title: 'HW12/HW12',
  component: HW12,
  decorators:[ReduxStoreProvider],
} as Meta;

const Template: Story<any> = (args) => <HW12 />;

export const BaseExample = Template.bind({});
BaseExample.args = {
};


