import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from '../components/Input/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
    },
    name: { control: 'text' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    name: 'username',
    type: 'text',
  },
};

export const Password: Story = {
  args: {
    name: 'password',
    type: 'password',
  },
};

export const Number: Story = {
  args: {
    name: 'age',
    type: 'number',
  },
};

export const TextWithPlaceholder: Story = {
  args: {
    name: 'username',
    type: 'text',
    placeholder: 'Entet text',
  },
};

export const PasswordWithPlaceholder: Story = {
  args: {
    name: 'password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const NumberWithPlaceholder: Story = {
  args: {
    name: 'age',
    type: 'number',
    placeholder: 'Enter number',
  },
};
