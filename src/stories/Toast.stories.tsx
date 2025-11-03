import type { Meta, StoryObj } from '@storybook/react-vite';
import Toast from '../components/Toast/Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: ['info', 'success', 'error'],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          height: '400px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Loading.......',
    duration: 3000,
    closable: true,
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Successful download!',
    duration: 5000,
    closable: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Something went wrong!',
    duration: 7000,
    closable: true,
  },
};
