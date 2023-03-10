import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationLink from '../components/NavigationLink';

export default {
    title: 'Navigation Link',
    component: NavigationLink,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
} as ComponentMeta<typeof NavigationLink>;

const Template: ComponentStory<typeof NavigationLink> = (args) => <NavigationLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    url: '/',
    label: 'Characters',
    onClick: () => undefined,
};
