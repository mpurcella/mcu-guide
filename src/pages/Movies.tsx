import axios from 'axios';
import { useEffect, useState } from 'react';
import MediaCardList from '../components/MediaCardList';
import Wrapper from '../components/Wrapper';
import ErrorScreen from '../components/ErrorScreen';
import PageBanner from '../components/PageBanner';

type MoviesProps = {
    cover_url: string;
    id: number;
    release_date: string;
    title: string;
};

const Movies = () => {
    const [movies, setMovies] = useState<MoviesProps[] | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const url = 'https://mcuapi.herokuapp.com/api/v1/movies';

        const getMovies = async () => {
            setError(false);
            setLoading(true);

            try {
                const response = await axios.get(url, { signal });
                setMovies(response.data.data);
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

        getMovies();

        // Cleanup Function
        return () => controller.abort();
    }, []);

    if (error) {
        return (
            <ErrorScreen tag="Sorry" children="...There was an issue loading the&nbsp;page. Please try&nbsp;again." />
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (movies === null) {
        return null;
    }

    return (
        <section className="bg-white">
            <PageBanner label="Movies" text="Explore the movies that make up Marvel Cinematic Universe!" />
            <Wrapper width="none">
                <MediaCardList media={movies} url="/movies/" />
            </Wrapper>
        </section>
    );
};

export default Movies;
