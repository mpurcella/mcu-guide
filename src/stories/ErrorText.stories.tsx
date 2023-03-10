import { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorText from '../components/ErrorText';

export default {
    title: 'Error Text',
    component: ErrorText,
    parameters: {
        background: {
            default: 'dark',
        },
    },
} as ComponentMeta<typeof ErrorText>;

const Template: ComponentStory<typeof ErrorText> = (args) => <ErrorText {...args} />;

export const Default = Template.bind({});
Default.args = {
    tag: '404',
    children: ' - Page not found',
};
