import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorScreen from '../components/ErrorScreen';
import Wrapper from '../components/Wrapper';
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
    related_movies?: Array<{
        cover_url: string;
        id: number;
        title: string;
        url: string;
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
            <ErrorScreen tag="Sorry" children="...There was an issue loading the&nbsp;page. Please try&nbsp;again." />
        );
    }

    if (movie === null) {
        return null;
    }

    return (
        <section className="bg-white">
            <Wrapper width="narrow">
                <MovieInfo movie={movie} />
            </Wrapper>
        </section>
    );
};

export default Movie;
