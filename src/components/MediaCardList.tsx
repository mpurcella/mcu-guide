import MediaCard from './MediaCard';

type MovieCardListProps = {
    media: Array<{
        cover_url: string;
        id: number;
        release_date: string;
        title: string;
    }>;
    className: string;
    basePath: string;
};

const MediaCardList = ({ media, className, basePath }: MovieCardListProps) => {
    return (
        <ul className={className}>
            {media.map((item) => {
                return (
                    <li key={item.id}>
                        <MediaCard
                            url={`${basePath}${item.id}`}
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
