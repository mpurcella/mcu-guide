import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MediaCard from '../components/MediaCard';

export default {
    title: 'Media Card',
    component: MediaCard,
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <div className="max-w-[300px]">
                    <Story />
                </div>
            </MemoryRouter>
        ),
    ],
} as ComponentMeta<typeof MediaCard>;

const Template: ComponentStory<typeof MediaCard> = (args) => <MediaCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    url: '#',
    imgUrl: 'https://res.cloudinary.com/augustomarcelo/image/upload/v1675211808/mcuapi/gallery/Movies/avengers_endgame/posters/1.jpg',
    alt: 'Avengers: Endgame',
    title: 'Avengers: Endgame',
    releaseDate: '2019-04-26',
};
