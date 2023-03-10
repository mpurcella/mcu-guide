import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationList from '../components/NavigationList';

export default {
    title: 'Navigation List',
    component: NavigationList,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
} as ComponentMeta<typeof NavigationList>;

const Template: ComponentStory<typeof NavigationList> = (args) => <NavigationList {...args} />;

export const Default = Template.bind({});
Default.args = {
    isNavOpen: false,
    closeNav: () => undefined,
    isScreenWide: true,
};
