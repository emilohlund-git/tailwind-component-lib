import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {},
  decorators: [withKnobs],
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = args => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
  text: 'Primary',
  size: 'medium',
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
  text: 'Secondary',
  size: 'medium',
  loading: false,
};

export const Accent = Template.bind({});
Accent.args = {
  variant: 'accent',
  disabled: false,
  text: 'Accent',
  size: 'medium',
  loading: false,
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  disabled: false,
  text: 'Light',
  size: 'medium',
  loading: false,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  disabled: false,
  text: 'Dark',
  size: 'medium',
  loading: false,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  disabled: false,
  text: 'Success',
  size: 'medium',
  loading: false,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  disabled: false,
  text: 'Error',
  size: 'medium',
  loading: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  disabled: true,
  text: 'Disabled',
  size: 'medium',
  loading: false,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  disabled: false,
  size: 'small',
  text: 'Small',
  loading: false,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'primary',
  disabled: false,
  size: 'medium',
  text: 'Medium',
  loading: false,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  disabled: false,
  size: 'large',
  text: 'Large',
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  disabled: false,
  size: 'medium',
  text: 'Loading',
  loading: true,
};
