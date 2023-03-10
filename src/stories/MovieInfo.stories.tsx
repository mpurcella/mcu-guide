import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieInfo from '../components/MovieInfo';

export default {
    title: 'Movie Info',
    component: MovieInfo,
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
} as ComponentMeta<typeof MovieInfo>;

const Template: ComponentStory<typeof MovieInfo> = (args) => <MovieInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    movie: {
        chronology: 15,
        cover_url:
            'https://res.cloudinary.com/augustomarcelo/image/upload/v1675208240/mcuapi/gallery/Movies/guardians_of_galaxy_vol_2/posters/1.jpg',
        directed_by: 'James Gunn',
        duration: 136,
        imdb_id: 'tt3896198',
        overview:
            "Set to the backdrop of 'Awesome Mixtape #2,' Marvel's Guardians of the Galaxy Vol. 2 continues the team's adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes' aid as the Marvel cinematic universe continues to expand.",
        phase: 3,
        post_credit_scenes: 5,
        saga: 'Infinity Saga',
        release_date: '2017-05-05',
        title: 'Guardians of the Galaxy Vol. 2',
        trailer_url: 'https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932955001',
    },
};
