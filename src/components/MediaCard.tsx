import { Link } from 'react-router-dom';

type MediaCardProps = {
    url: string;
    imgUrl: string;
    alt: string;
    title: string;
    releaseDate: string;
};

const MediaCard = ({ url, imgUrl, alt, title, releaseDate }: MediaCardProps) => {
    const formattedDate = new Date(releaseDate).toLocaleString('en-us', {
        year: 'numeric',
    });

    return (
        <Link
            to={url}
            className="group flex flex-col gap-16 outline-none transition-transform duration-200 ease-linear lg:relative lg:shadow-lg lg:shadow-black-100/60 lg:hover:scale-102 lg:focus-visible:scale-102"
        >
            <img
                src={imgUrl}
                alt={alt}
                className="block shadow-lg shadow-black-100/60 duration-200 ease-linear group-hover:scale-102 group-focus-visible:scale-102 lg:shadow-none lg:group-hover:transform-none lg:group-focus-visible:transform-none"
                loading="lazy"
            />
            <div className="flex flex-col gap-8 transition-colors duration-200 ease-linear lg:absolute lg:h-full lg:w-full lg:items-center lg:justify-center lg:gap-16 lg:p-20 lg:group-hover:bg-black-300/95 lg:group-focus-visible:bg-black-300/95">
                <h2 className="text-14 font-bold uppercase leading-tight <lg:transition-colors <lg:duration-200 <lg:ease-linear <lg:group-hover:text-red  <lg:group-focus-visible:text-red lg:text-center lg:font-normal lg:text-white lg:opacity-0 lg:media-card-text-transition lg:hide lg:group-hover:opacity-100 lg:group-hover:show lg:group-focus-visible:opacity-100 lg:group-focus-visible:show">
                    {title}
                </h2>
                <p className="text-14 font-light media-card-text-transition lg:text-grey-200 lg:opacity-0 lg:hide lg:group-hover:opacity-100 lg:group-hover:show lg:group-focus-visible:opacity-100 lg:group-focus-visible:show">
                    {releaseDate === null ? 'TBD' : formattedDate}
                </p>
            </div>
        </Link>
    );
};

export default MediaCard;
