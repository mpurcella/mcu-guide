import { ComponentMeta, ComponentStory } from '@storybook/react';
import TvShowInfo from '../components/TvShowInfo';

export default {
    title: 'Tv Show Info',
    component: TvShowInfo,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'light',
        },
    },
    decorators: [
        (Story) => (
            <div className="m-auto max-w-screen-lg p-40">
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof TvShowInfo>;

const Template: ComponentStory<typeof TvShowInfo> = (args) => <TvShowInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    tvShow: {
        cover_url:
            'https://res.cloudinary.com/augustomarcelo/image/upload/v1676220025/mcuapi/gallery/tv_shows/what_if/season_1/posters/1.jpg',
        directed_by: 'Bryan Andrew',
        imdb_id: 'tt10168312',
        number_episodes: 9,
        overview:
            "'What If…' flips the script on the MCU, reimagining famous events from the films in unexpected ways. Marvel Studios’ first animated series focuses on different heroes from the MCU, featuring a voice cast that includes a host of stars who reprise their roles. Directed by Bryan Andrews with AC Bradley as head writer, 'What If…?' launches exclusively on Disney+ on August 11, 2021.",
        phase: 4,
        release_date: '2021-08-11',
        saga: 'Multiverse Saga',
        season: 1,
        title: 'What If...?',
        trailer_url:
            'https://assets.espn.go.com/players/web-player-bundle/next/embed/share.html#id=6262751537001&brand=marvel',
    },
};
