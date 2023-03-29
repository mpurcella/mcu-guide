import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonLink from '../components/ButtonLink';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';

export default {
    title: 'Button Link',
    component: ButtonLink,
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    url: '#',
    className: 'button-link-primary',
    startIcon: <FaPlay />,
    label: 'Watch Trailer',
};

export const Secondary = Template.bind({});
Secondary.args = {
    url: '#',
    className: 'button-link-secondary',
    startIcon: <FaExternalLinkAlt />,
    label: 'View on IMDB',
};
