import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import MediaCardList from '../components/MediaCardList';

export default {
    title: 'Media Card List',
    component: MediaCardList,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'light',
        },
    },
    decorators: [
        (Story) => (
            <div className="max-w-screen-xl m-auto p-40">
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </div>
        ),
    ],
} as ComponentMeta<typeof MediaCardList>;

const Template: ComponentStory<typeof MediaCardList> = (args) => <MediaCardList {...args} />;

export const Default = Template.bind({});
Default.args = {
    media: [
        {
            id: 14,
            title: 'Doctor Strange',
            cover_url:
                'https://res.cloudinary.com/augustomarcelo/image/upload/v1675208132/mcuapi/gallery/Movies/doctor_strange/posters/1.jpg',
            release_date: '2016-11-04',
        },
        {
            id: 16,
            title: 'Spider-Man: Homecoming',
            cover_url:
                'https://res.cloudinary.com/augustomarcelo/image/upload/v1675208337/mcuapi/gallery/Movies/spider-man_homecoming/posters/1.jpg',
            release_date: '2017-07-07',
        },
        {
            id: 18,
            title: 'Black Panther',
            cover_url:
                'https://res.cloudinary.com/augustomarcelo/image/upload/v1675211435/mcuapi/gallery/Movies/black_panther/posters/1.jpg',
            release_date: '2018-02-16',
        },
        {
            id: 22,
            title: 'Avengers: Endgame',
            cover_url:
                'https://res.cloudinary.com/augustomarcelo/image/upload/v1675211808/mcuapi/gallery/Movies/avengers_endgame/posters/1.jpg',
            release_date: '2019-04-26',
        },
    ],
};
