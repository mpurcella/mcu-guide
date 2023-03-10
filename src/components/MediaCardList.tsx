import MediaCard from './MediaCard';

type MovieCardListProps = {
    media: Array<{
        cover_url: string;
        id: number;
        release_date: string;
        title: string;
    }>;
    url: string;
};

const MediaCardList = ({ media, url }: MovieCardListProps) => {
    return (
        <ul className="grid grid-cols-1 gap-40 sm:grid-cols-2 sm:gap-28 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {media.map((item) => {
                return (
                    <li key={item.id}>
                        <MediaCard
                            url={`${url}${item.id}`}
                            imgUrl={item.cover_url}
                            alt={item.title}
                            title={item.title}
                            releaseDate={item.release_date}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default MediaCardList;
