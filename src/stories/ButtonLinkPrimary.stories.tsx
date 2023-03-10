import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonLinkPrimary from '../components/ButtonLinkPrimary';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';

export default {
    title: 'Button Link Primary',
    component: ButtonLinkPrimary,
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
} as ComponentMeta<typeof ButtonLinkPrimary>;

const Template: ComponentStory<typeof ButtonLinkPrimary> = (args) => <ButtonLinkPrimary {...args} />;

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
