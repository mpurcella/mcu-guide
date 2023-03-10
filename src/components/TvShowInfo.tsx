import ButtonLinkPrimary from './ButtonLinkPrimary';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';

type TvShowInfoProps = {
    tvShow: {
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
};

const MovieInfo = ({ tvShow }: TvShowInfoProps) => {
    const formattedData = new Date(tvShow.release_date).toLocaleString('en-us', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className="grid grid-cols-1 gap-40 md:grid-cols-12">
            <div className="md:col-span-5">
                <img
                    src={tvShow.cover_url}
                    alt={tvShow.title}
                    className="m-auto w-full max-w-400 object-cover object-center shadow-lg shadow-black-100/35 md:m-0"
                />
            </div>
            <div className="flex flex-col gap-32 md:col-span-7">
                <div className="flex flex-col gap-12">
                    <h1 className="text-28 font-bold uppercase lg:text-36">{tvShow.title}</h1>
                    <div className="flex gap-6">
                        <h2 className="text-14 font-bold uppercase">Directed By:</h2>
                        {tvShow.directed_by === null ? (
                            <p className="text-14">TBD</p>
                        ) : (
                            <p className="text-14">{tvShow.directed_by}</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                    <div className="flex items-center gap-6">
                        <h2 className="text-14 font-bold uppercase">Release Date:</h2>
                        {tvShow.release_date === null ? (
                            <p className="text-14">TBD</p>
                        ) : (
                            <p className="text-14">{formattedData}</p>
                        )}
                    </div>
                    <div className="flex items-center gap-6">
                        <h2 className="text-14 font-bold uppercase">Episodes:</h2>
                        {tvShow.number_episodes === 0 || null ? (
                            <p className="text-14">TBD</p>
                        ) : (
                            <p className="text-14">{tvShow.number_episodes}</p>
                        )}
                    </div>
                </div>
                {tvShow.overview === null ? null : <p className="leading-normal">{tvShow.overview}</p>}
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6">
                        <h2 className="text-14 font-bold uppercase">Phase:</h2>
                        <p className="text-14">{tvShow.phase}</p>
                    </div>
                    <div className="flex gap-6">
                        <h2 className="text-14 font-bold uppercase">Saga:</h2>
                        <p className="text-14">{tvShow.saga}</p>
                    </div>
                </div>
            </div>
            <div className="md:col-span-12">
                <div className="flex flex-col items-center gap-20 md:flex-row md:justify-center">
                    {tvShow.trailer_url === null ? null : (
                        <ButtonLinkPrimary
                            url={tvShow.trailer_url}
                            className="button-link-primary"
                            startIcon={<FaPlay />}
                            label="Watch Trailer"
                        />
                    )}
                    {tvShow.trailer_url === null ? null : (
                        <ButtonLinkPrimary
                            url={`https://www.imdb.com/title/${tvShow.imdb_id}`}
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
