import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ErrorScreen from '../components/ErrorScreen';
import TvShowInfo from '../components/TvShowInfo';

type TvShowProps = {
    cover_url: string;
    directed_by: string;
    imdb_id: string;
    number_episodes: number;
    overview: string;
    phase: number;
    release_date: string;
    saga: string;
    season: number;
    title: string;
    trailer_url: string;
};

const TvShow = () => {
    const { id } = useParams();
    const [tvShow, setTvShow] = useState<TvShowProps | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const url = `https://mcuapi.herokuapp.com/api/v1/tvshows/${id}`;

        const getTvShow = async () => {
            setError(false);
            setLoading(true);

            try {
                const response = await axios.get(url, { signal });
                setTvShow(response.data);
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

        getTvShow();

        // Cleanup Function
        return () => controller.abort();
    }, [id]);

    if (error) {
        return (
            <>
                <Helmet>
                    <title>Marvel Cinematic Universe Guide | Loading Error</title>
                </Helmet>
                <ErrorScreen tag="Sorry">
                    ...There was an issue loading the&nbsp;page. Please try&nbsp;again.
                </ErrorScreen>
            </>
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (tvShow === null) {
        return null;
    }

    return (
        <>
            <Helmet>
                <title>Marvel Cinematic Universe Guide | {tvShow.title}</title>
            </Helmet>
            <TvShowInfo tvShow={tvShow} />
        </>
    );
};

export default TvShow;
