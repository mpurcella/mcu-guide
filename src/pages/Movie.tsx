import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ErrorScreen from '../components/ErrorScreen';
import MovieInfo from '../components/MovieInfo';

type MovieProps = {
    chronology: number;
    cover_url: string;
    directed_by: string;
    duration: number;
    imdb_id: string;
    overview: string;
    phase: number;
    post_credit_scenes: number;
    related_movies: Array<{
        cover_url: string;
        id: number;
        release_date: string;
        title: string;
    }>;
    release_date: string;
    saga: string;
    title: string;
    trailer_url: string;
};

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieProps | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const url = `https://mcuapi.herokuapp.com/api/v1/movies/${id}`;

        const getMovie = async () => {
            setError(false);
            setLoading(true);

            try {
                const response = await axios.get(url, { signal });
                setMovie(response.data);
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

        getMovie();

        // Cleanup Function
        return () => controller.abort();
    }, []);

    if (error) {
        return (
            <>
                <Helmet>
                    <title>Marvel Cinematic Universe Guide | Loading Error</title>
                </Helmet>
                <ErrorScreen
                    tag="Sorry"
                    children="...There was an issue loading the&nbsp;page. Please try&nbsp;again."
                />
            </>
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (movie === null) {
        return null;
    }

    return (
        <>
            <Helmet>
                <title>Marvel Cinematic Universe Guide | {movie.title}</title>
            </Helmet>
            <MovieInfo movie={movie} />
        </>
    );
};

export default Movie;
