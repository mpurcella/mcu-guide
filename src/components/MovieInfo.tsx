import ButtonLinkPrimary from './ButtonLinkPrimary';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';

type MovieInfoProps = {
    movie: {
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
        saga: string;
        release_date: string;
        title: string;
        trailer_url: string;
    };
};

const MovieInfo = ({ movie }: MovieInfoProps) => {
    const formattedDate = new Date(movie.release_date).toLocaleString('en-us', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className="grid grid-cols-1 gap-40 md:grid-cols-12">
            <div className="md:col-span-5">
                <img
                    src={movie.cover_url}
                    alt={movie.title}
                    className="m-auto w-full max-w-400 object-cover object-center shadow-lg shadow-black-100/60 md:m-0"
                />
            </div>
            <div className="flex flex-col gap-32 md:col-span-7">
                <div className="flex flex-col gap-12">
                    <h1 className="text-28 font-bold uppercase lg:text-36">{movie.title}</h1>
                    <div className="flex gap-6">
                        <h2 className="text-14 font-bold uppercase">Directed By:</h2>
                        {movie.directed_by === '' || null ? (
                            <p className="text-14">TBD</p>
                        ) : (
                            <p className="text-14">{movie.directed_by}</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                    <div className="flex items-center gap-6">
                        <h2 className="text-14 font-bold uppercase">Release Date:</h2>
                        {movie.release_date === null ? (
                            <p className="text-14">TBD</p>
                        ) : (
                            <p className="text-14">{formattedDate}</p>
                        )}
                    </div>
                    <div className="flex items-center gap-6">
                        <h2 className="text-14 font-bold uppercase">Runtime:</h2>
                        {movie.duration === 0 || null ? (
                            <p className="text-14">TBD</p>
                        ) : (
                            <p className="text-14">{movie.duration} Minutes</p>
                        )}
                    </div>
                </div>
                {movie.overview === null ? null : <p className="leading-normal">{movie.overview}</p>}
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6">
                        <h2 className="text-14 font-bold uppercase">Post Credit Scenes:</h2>
                        <p className="text-14">{movie.post_credit_scenes}</p>
                    </div>
                    <div className="flex gap-6">
                        <h2 className="text-14 font-bold uppercase">Chronological Order:</h2>
                        <p className="text-14">{movie.chronology}</p>
                    </div>
                    <div className="flex gap-6">
                        <h2 className="text-14 font-bold uppercase">Phase:</h2>
                        <p className="text-14">{movie.phase}</p>
                    </div>
                    <div className="flex gap-6">
                        <h2 className="text-14 font-bold uppercase">Saga:</h2>
                        <p className="text-14">{movie.saga}</p>
                    </div>
                </div>
            </div>
            <div className="md:col-span-12">
                <div className="flex flex-col items-center gap-20 md:flex-row md:justify-center">
                    {movie.trailer_url === null ? null : (
                        <ButtonLinkPrimary
                            url={movie.trailer_url}
                            className="button-link-primary"
                            startIcon={<FaPlay />}
                            label="Watch Trailer"
                        />
                    )}
                    {movie.imdb_id === null ? null : (
                        <ButtonLinkPrimary
                            url={`https://www.imdb.com/title/${movie.imdb_id}`}
                            className="button-link-secondary"
                            startIcon={<FaExternalLinkAlt />}
                            label="View on IMDB"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
