import DotLoader, { DotLoaderProps } from './DotLoader';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Loaders/Dot',
  component: DotLoader,
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<DotLoaderProps> = (args) => <DotLoader {...args} />;

export const Size10Black = Template.bind({});
Size10Black.args = {
  size: 10,
  color: '#000000',
};

export const Size100Black = Template.bind({});
Size100Black.args = {
  size: 100,
  color: '#000000',
};

export const Size10Blue = Template.bind({});
Size10Blue.args = {
  size: 10,
  color: '#2B2BD8',
};
