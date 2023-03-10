import axios from 'axios';
import { useEffect, useState } from 'react';
import MediaCardList from '../components/MediaCardList';
import Wrapper from '../components/Wrapper';
import ErrorScreen from '../components/ErrorScreen';
import PageBanner from '../components/PageBanner';
import MarvelComicStrip from '../images/comic-strip.jpeg';

type TvShowsProps = {
    cover_url: string;
    id: number;
    release_date: string;
    title: string;
};

const TvShows = () => {
    const [tvShows, setTvShows] = useState<TvShowsProps[] | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const url = 'https://mcuapi.herokuapp.com/api/v1/tvshows';

        const getTvShows = async () => {
            setError(false);
            setLoading(true);

            try {
                const response = await axios.get(url, { signal });
                setTvShows(response.data.data);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
                console.error(err);
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        getTvShows();

        // Cleanup Function
        return () => controller.abort();
    }, []);

    if (error) {
        return (
            <ErrorScreen tag="Sorry" children="...There was an issue loading the&nbsp;page. Please try&nbsp;again." />
        );
    }

    if (tvShows === null) {
        return null;
    }

    return (
        <section className="bg-white">
            <PageBanner
                label="Tv Shows"
                text="Explore the television shows that make up the Marvel Cinematic Universe!"
            />
            <Wrapper width="none">
                <MediaCardList media={tvShows} url="/tvshows/" />
            </Wrapper>
        </section>
    );
};

export default TvShows;