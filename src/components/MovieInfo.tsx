import ButtonLink from './ButtonLink';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
import Wrapper from './Wrapper';
import MediaCardList from './MediaCardList';

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
        related_movies: Array<{
            cover_url: string;
            id: number;
            title: string;
            release_date: string;
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
        <div className="flex flex-col">
            <section>
                <Wrapper width="narrow">
                    <div className="flex flex-col gap-40 md:grid md:grid-cols-12">
                        <div className="md:col-span-5">
                            <img
                                src={movie.cover_url}
                                alt={movie.title}
                                className="m-auto w-full max-w-440 object-cover object-center shadow-lg shadow-black-100/50"
                            />
                        </div>
                        <div className="flex flex-col gap-32 md:col-span-7">
                            <div className="flex flex-col gap-12">
                                <h1 className="text-28 font-bold uppercase lg:text-32">{movie.title}</h1>
                                <div className="flex gap-6">
                                    <h2 className="text-14 font-bold uppercase">Directed By:</h2>
                                    <p className="text-14">{movie.directed_by === '' ? 'TBD' : movie.directed_by}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex gap-6">
                                    <h2 className="text-14 font-bold uppercase">Release Date:</h2>
                                    <p className="text-14">{movie.release_date === null ? 'TBD' : formattedDate}</p>
                                </div>
                                <div className="flex gap-6">
                                    <h2 className="text-14 font-bold uppercase">Runtime:</h2>
                                    <p className="text-14">{movie.duration === 0 ? 'TBD' : `${movie.duration} Min.`}</p>
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
                        <div className="flex flex-col items-center gap-20 md:col-span-12 md:flex-row md:justify-center">
                            {movie.trailer_url === null ? null : (
                                <ButtonLink
                                    url={movie.trailer_url}
                                    className="button-link-primary"
                                    startIcon={<FaPlay />}
                                    label="Watch Trailer"
                                />
                            )}
                            <ButtonLink
                                url={`https://www.imdb.com/title/${movie.imdb_id}`}
                                className="button-link-secondary"
                                startIcon={<FaExternalLinkAlt />}
                                label="View on IMDB"
                            />
                        </div>
                    </div>
                </Wrapper>
            </section>
            {movie.related_movies.length === 0 ? null : (
                <section className='flex flex-col items-center before:relative before:block before:h-2 before:w-[calc(100vw-80px)] before:bg-black-300/10 before:content-[""]'>
                    <Wrapper width="wide">
                        <div className="flex flex-col gap-40">
                            <h3 className="text-18 font-bold uppercase">Related Movies</h3>
                            <MediaCardList
                                media={movie.related_movies}
                                className="grid grid-cols-1 gap-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-24"
                                basePath="/movies"
                            />
                        </div>
                    </Wrapper>
                </section>
            )}
        </div>
    );
};

export default MovieInfo;
