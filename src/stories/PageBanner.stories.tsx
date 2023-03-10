import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageBanner from '../components/PageBanner';

export default {
    title: 'Page Banner',
    component: PageBanner,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof PageBanner>;

const Template: ComponentStory<typeof PageBanner> = (args) => <PageBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Movies',
    text: 'Explore the movies that make up the Marvel Cinematic Universe',
};
