import { Sidebar } from './Sidebar';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story = () => <Sidebar />;

export const SideMenu = Template.bind({});
