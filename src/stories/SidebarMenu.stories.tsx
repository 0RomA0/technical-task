import type { Meta, StoryObj } from '@storybook/react';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu';

const meta = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          width: '400px',
          height: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const SingleLevelMenu: Story = {
  args: {
    isOpen: true,
    menuItems: [{ title: 'Home' }, { title: 'About' }, { title: 'Contact' }],
  },
};

export const NestedMenu: Story = {
  args: {
    isOpen: true,
    menuItems: [
      {
        title: 'Dashboard',
        children: [
          { title: 'Overview' },
          { title: 'Reports' },
          { title: 'Analytics' },
        ],
      },
      {
        title: 'Settings',
        children: [{ title: 'Profile' }, { title: 'Security' }],
      },
      { title: 'Logout' },
    ],
  },
};

export const ClosedMenu: Story = {
  args: {
    isOpen: false,
    menuItems: [{ title: 'Home' }, { title: 'Services' }, { title: 'Contact' }],
  },
};
