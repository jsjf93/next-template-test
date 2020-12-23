import CircleLoader, { CircleLoaderProps } from './CircleLoader';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Loaders/Circle',
  component: CircleLoader,
  argTypes: {
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CircleLoaderProps> = (args) => <CircleLoader {...args} />;

export const SimpleLoader = Template.bind({});
SimpleLoader.args = {
  size: 50,
  primaryColor: '#000',
  lineWidth: 2,
  animationDuration: 1,
};

export const LargeAndFastLoader = Template.bind({});
LargeAndFastLoader.args = {
  size: 100,
  primaryColor: '#000',
  lineWidth: 5,
  animationDuration: 0.5,
};

export const TwoColorLoader = Template.bind({});
TwoColorLoader.args = {
  size: 50,
  primaryColor: '#000',
  secondaryColor: '#EEE',
  lineWidth: 2,
  animationDuration: 1,
};

export const ThickTwoColorLoaderWithDifferentEase = Template.bind({});
ThickTwoColorLoaderWithDifferentEase.args = {
  size: 100,
  primaryColor: '#000',
  secondaryColor: '#EEE',
  lineWidth: 10,
  animationDuration: 1,
  ease: 'backInOut',
};
