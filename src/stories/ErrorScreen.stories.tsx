import { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorScreen from '../components/ErrorScreen';

export default {
    title: 'Error Screen',
    component: ErrorScreen,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof ErrorScreen>;

const Template: ComponentStory<typeof ErrorScreen> = (args) => <ErrorScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
    tag: '404',
    children: ' - Page not found.',
};
