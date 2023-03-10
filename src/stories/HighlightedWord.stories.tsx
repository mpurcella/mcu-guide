import { ComponentMeta, ComponentStory } from '@storybook/react';
import HighlightedWord from '../components/HighlightedWord';

export default {
    title: 'Highligted Word',
    component: HighlightedWord,
    parameters: {
        background: {
            default: 'dark',
        },
    },
} as ComponentMeta<typeof HighlightedWord>;

const Template: ComponentStory<typeof HighlightedWord> = (args) => <HighlightedWord {...args} />;

export const Default = Template.bind({});
Default.args = {
    tag: '404',
};
